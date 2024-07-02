// App.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const autorController = require("./controllers/autorController");
const libroController = require("./controllers/libroController");
app.use(express.urlencoded({ extended: true }));
// Middleware para procesar JSON y formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rutas para autores
app.get("/autor/get", autorController.getAutor);
app.post("/autor/insert", autorController.insertAutor);
app.post("/autor/update", autorController.updateAutor);
app.post("/autor/delete", autorController.deleteAutor);
// Rutas para libros
app.get("/libro/get",libroController.getLibros);
app.post("/libro/insert", libroController.insertLibro);
app.post("/libro/update", libroController.updateLibro);
app.post("/libro/delete", libroController.deleteLibro);

// Ruta para la raíz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "index.html")); // Asegúrate de que tengas un archivo index.html en la carpeta public/html
});
// Función para servir archivos estáticos
function serveStaticFiles(route, folder) {
    app.get(`/public/${route}/:filename`, (req, res) => {
        const filename = req.params.filename;
        res.sendFile(path.join(__dirname, "public", folder, filename));
    });
}

// Llamar la función para cada tipo de archivo estático
serveStaticFiles("html", "html");
serveStaticFiles("css", "css");
serveStaticFiles("js", "js");
serveStaticFiles("img", "img");


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
