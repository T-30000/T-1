const { Console } = require("console");
const pool = require("../controllers/dbConfig.js");

const getLibros = (req, res) => {
    pool.query("SELECT * FROM libros", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};


const insertLibro = (req, res) => {
    const { id_autor, titulo_libro, fecha_libro, precio_libro } = req.body;
    pool.query(
        "INSERT INTO libros (id_autor, titulo_libro, fecha_libro, precio_libro) VALUES (?, ?, ?, ?)",
        [id_autor, titulo_libro, fecha_libro, precio_libro],
        (error, results) => {
            if (error) {
                return res.status(500).send("Error al insertar el libro en la base de datos");
            }
            res.send(`Libro insertado con ID: ${results.insertId}`);
        }
    );
};

const updateLibro = (req, res) => {
    const { id_libro, id_autor, titulo_libro, fecha_libro, precio_libro } = req.body;
    pool.query(
        "UPDATE libros SET id_autor = ?, titulo_libro = ?, fecha_libro = ?, precio_libro = ? WHERE id_libro = ?",
        [id_autor, titulo_libro, fecha_libro, precio_libro, id_libro],
        (error, results) => {
            if (error) {
                console.error("Error al actualizar el libro en la base de datos:", error);
                return res.status(500).send("Error al actualizar el libro en la base de datos");
            }
            console.log(`Libro actualizado con ID: ${id_libro}`);
            res.send(`Libro actualizado con ID: ${id_libro}`);
        }
    );
};



const deleteLibro = (req, res) => {
    const id_libro = req.body.id_libro; // Accede al ID desde el cuerpo de la solicitud
    pool.query(
        "DELETE FROM libros WHERE id_libro = ?",
        [id_libro],
        (error, results) => {
            if (error) {
                return res.status(500).send("Error al eliminar el libro de la base de datos");
            }
            console.log(`Libro eliminado con ID: ${id_libro}`);
            res.send(`Libro eliminado con ID: ${id_libro}`);
        }
    );
};
module.exports = 
{
    getLibros,
    insertLibro,
    updateLibro,
    deleteLibro
};
