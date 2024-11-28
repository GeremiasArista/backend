class UsuarioControllers {
    fetchUsers = async (req, resp) => {
        // Datos simulados para usuarios
        const data = [
            {
                id_usuario: 1,
                nombre: "Juan",
                apellido: "Pérez",
                email: "juan.perez@example.com",
                direccion: "Calle Falsa 123"
            },
            {
                id_usuario: 2,
                nombre: "Ana",
                apellido: "Gómez",
                email: "ana.gomez@example.com",
                direccion: "Avenida Siempre Viva 456"
            }
        ];

        resp.status(200).json({
            message: 'Usuarios devueltos con éxito',
            data: data
        });
    }

    // Funciones de creación, actualización, eliminación se dejan como están
    createUsers = async (req, resp) => {
        const data = "Acabas de presionar la función Create de usuarios 😢";
        resp.status(200).json({ message: data });
    }

    updateUsers = async (req, resp) => {
        const data = "Función de actualización de usuarios aún no implementada";
        resp.status(500).json({ message: data });
    };

    deleteUsers = async (req, resp) => {
        const data = "Función de eliminación de usuarios aún no implementada";
        resp.status(500).json({ message: data });
    }
}

module.exports = new UsuarioControllers();
