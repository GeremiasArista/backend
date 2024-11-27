const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const conf = require('../config/configbd.json');
const DBManager = require('./DBManager');
const Router = require('../routes/router.js');

// Importar los modelos
const usuarioModel = require('../models/usuarioModel');
const gruposModel = require('../models/gruposModel');

const usuarioControllers = require('../controllers/usuarioControllers.js');
const gruposControllers = require('../controllers/gruposControllers.js');

class AppManager {
    #appExpress;
    #runningConfType;

    constructor() {
        this.#init();
        Object.preventExtensions(this);
    }

    #init = async () => {
        this.#runningConfType = conf.DevConfig;
        this.#appExpress = express();
    }

    prepareService = async () => {
        this.#appExpress.use(cors({
            origin: 'http://localhost:4200',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }));

        this.#appExpress.use(express.json());
        this.#appExpress.use(bodyParser.urlencoded({ extended: true }));
        this.#appExpress.use(morgan('dev'));

       // await this.#prepareDataBase(this.#runningConfType.db);
        await this.#prepareRouting();
    }

    /*#prepareDataBase = async (dbConfig) => {
        const oDBMan = new DBManager();
        await oDBMan.prepareDataBase(dbConfig);
        await usuarioModel.defineModel(oDBMan.getConnection()); // Aquí estamos usando el modelo
        await gruposModel.defineModel(oDBMan.getConnection()); // Aquí también
    }*/

    #prepareRouting = async () => {
        const oRouter = new Router();
        oRouter.attachControllers(usuarioControllers, gruposControllers);
        await oRouter.prepareRouting();
        this.#appExpress.use('/api', oRouter.getRouter());
    }

    runService = async () => {
        const thisServicePort = this.#runningConfType.service.port;
        await this.#appExpress.listen(thisServicePort, () => {
            console.log(`AppManager is ready on ${thisServicePort}`);
        });
    }

    setupErrorHandling = () => {
        this.#appExpress.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Algo salió mal!');
        });
    }
}

module.exports = AppManager;
