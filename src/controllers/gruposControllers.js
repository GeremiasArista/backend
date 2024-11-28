const gruposModel = require('../models/gruposModel');

class GruposControllers {
    // Obtener grupos
    fetchGrupos = async (req, resp) => {
        const data = [
            { id_grupo: 1, nombre_grupo: "Grupo Estático 1", descripcion: "Descripción estática 1", fecha_creacion: "2024-01-01" },
            { id_grupo: 2, nombre_grupo: "Grupo Estático 2", descripcion: "Descripción estática 2", fecha_creacion: "2024-01-02" }
        ];
        console.log("Función fetchGrupos ejecutada.");
        resp.status(200).json({ message: "Datos estáticos devueltos con éxito", data });
    }

    // Crear grupo
    createGrupos = async (req, resp) => {
        console.log("Función createGrupos ejecutada con los siguientes datos:", req.body);
        const data = { id_grupo: 3, ...req.body };
        resp.status(201).json({ message: "Grupo creado con éxito (simulado)", data });
    }

    // Actualizar grupo
    updateGrupos = async (req, resp) => {
        console.log(`Función updateGrupos ejecutada para el ID: ${req.params.id_grupo}`);
        const data = { id_grupo: req.params.id_grupo, ...req.body };
        resp.status(200).json({ message: `Grupo con ID ${req.params.id_grupo} actualizado (simulado)`, data });
    };

    // Eliminar grupo
    deleteGrupos = async (req, resp) => {
        console.log(`Función deleteGrupos ejecutada para el ID: ${req.params.id_grupo}`);
        resp.status(200).json({ message: `Grupo con ID ${req.params.id_grupo} eliminado (simulado)` });
    }
}

module.exports = new GruposControllers();
