const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Bienvenido al servidor!');
});


app.post('/datos', (req, res) => {
    const datos = req.body;
    res.send(`Datos recibidos: ${JSON.stringify(datos)}`);
});


app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
app.get('/test', (req, res) => {
    res.send('Ruta de prueba funcionando');
});