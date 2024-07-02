const { Console } = require("console");
const pool = require("../controllers/dbConfig.js");

// Obtener los Autores
const getAutor = (req, res) => {
    pool.query("SELECT * FROM autores", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};

// Añadir Autor
const insertAutor = (req, res) => {
    const { nombre_autor, apellido_autor, fecha_autor } = req.body;
    pool.query(
        "INSERT INTO autores (nombre_autor, apellido_autor, fecha_autor) VALUES (?, ?, ?)",
        [nombre_autor, apellido_autor, fecha_autor],
        (error, results) => {
            if (error) {
                return res.status(500).send("Error al insertar el autor en la base de datos");
            }
        }
    );
};

// Actualizar los autores
const updateAutor = (req, res) => {
    const { id_autor, nombre_autor, apellido_autor, fecha_autor } = req.body;
    pool.query(
        "UPDATE autores SET nombre_autor = ?, apellido_autor = ?, fecha_autor = ? WHERE id_autor = ?",
        [nombre_autor, apellido_autor, fecha_autor, id_autor],
        (error, results) => {
            if (error) {
                console.error("Error al actualizar el autor en la base de datos:", error);
                return res.status(500).send("Error al actualizar el autor en la base de datos");
            }
            res.send(`Autor actualizado con ID: ${id_autor}`);
        }
    );
};


const deleteAutor = (req, res) => {
    const id_autor = req.body.id_autor; // Accede al ID desde el cuerpo de la solicitud
    pool.query(
        "DELETE FROM autores WHERE id_autor = ?",
        [id_autor],
        (error, results) => {
            if (error) {
                return res.status(500).send("Error al eliminar el autor de la base de datos");
            }
            res.send(`Autor eliminado con ID: ${id_autor}`);
        }
    );
};

module.exports = 
{
    getAutor,
    insertAutor,
    updateAutor,
    deleteAutor
};
