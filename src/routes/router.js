const express = require('express');

class Router {
    #router;
    #usuarioControllers;
    #gruposControllers;

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);
    }

    attachControllers = async (usuarioControllers, gruposControllers) => {
        this.#usuarioControllers = usuarioControllers;
        this.#gruposControllers = gruposControllers;
        this.#router.post('/usuarios', this.#usuarioControllers.createUsers);
        this.#router.post('/grupos', this.#gruposControllers.createGrupos);
    }

    prepareRouting = async () => {
        this.#router.get('/usuarios', this.#usuarioControllers.fetchUsers);
        this.#router.put('/usuarios/:id_usuario', this.#usuarioControllers.updateUsers);
        this.#router.delete('/usuarios/:id_usuario', this.#usuarioControllers.deleteUsers);

        this.#router.get('/grupos', this.#gruposControllers.fetchGrupos);
        this.#router.put('/grupos/:id_grupo', this.#gruposControllers.updateGrupos);
        this.#router.delete('/grupos/:id_grupo', this.#gruposControllers.deleteGrupos);
    }

    getRouter = () => {
        return this.#router;
    }
}

module.exports = Router;
