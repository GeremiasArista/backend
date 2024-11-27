const usuarioModel = require('../models/usuarioModel');

class UsuarioControllers {
    fetchUsers = async (req, resp) => {
        //let data = await usuarioModel.fetchUsersAll();
        const data = "Acabas de presionar la función Fetch para usuario😏";
        resp.status(200).json({ message: data });
    }

    createUsers = async (req, resp) => {
       // let record = await usuarioModel.createUsers(req.body);
       const data = "Acabas De Precionar La Función Create de usuarios 😢";
        resp.status(200).json({ message: data });
    }

    updateUsers = async (req, resp) => {
       /* try {
            let record = await usuarioModel.updateUsers(req.params.id_usuario, req.body);
            if (record) {
                resp.status(200).json({ message: 'Usuario actualizado', record });
            } else {
                resp.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            resp.status(500).json({ message: 'Error actualizando usuario', error: error.message });
        }*/
    };

    deleteUsers = async (req, resp) => {
       /* let deletedCount = await usuarioModel.deleteUser(req.params.id_usuario);
        resp.status(200).json({
            message: `User with ID ${req.params.id_usuario} deleted successfully`,
            deletedCount
        });*/
    }
}

module.exports = new UsuarioControllers();
