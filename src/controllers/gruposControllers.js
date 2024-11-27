const gruposModel = require('../models/gruposModel');

class GruposControllers {
    fetchGrupos = async (req, resp) => {
        //let data = await gruposModel.fetchGruposAll();
        const data = "Acabas de presionar la función Fetch para grupos 😏";
        resp.status(200).json({ message: data });
    }

    createGrupos = async (req, resp) => {
        //let record = await gruposModel.createGrupos(req.body);
        const data = "Acabas De Precionar La Función Create para gurpos😢";
        resp.status(200).json({ message: data });
    }

    updateGrupos = async (req, resp) => {
        /*try {
            let record = await gruposModel.updateGrupos(req.params.id_grupo, req.body);
            if (record) {
                resp.status(200).json({ message: 'Grupo actualizado', record });
            } else {
                resp.status(404).json({ message: 'Grupo no encontrado' });
            }
        } catch (error) {
            resp.status(500).json({ message: 'Error actualizando grupo', error: error.message });
        }*/
    };

    deleteGrupos = async (req, resp) => {
       /* let deletedCount = await gruposModel.deleteGrupo(req.params.id_grupo);
        resp.status(200).json({
            message: `Grupo con ID ${req.params.id_grupo} eliminado con éxito`,
            deletedCount
        });*/
    }
}

module.exports = new GruposControllers();
