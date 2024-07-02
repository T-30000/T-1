document.addEventListener("DOMContentLoaded", function () {
    const tablaAutoresBody = document.getElementById("tbodyAutores");
    const tablaLibrosBody = document.getElementById("tbodyLibros");

    // Función para cargar los autores desde el backend
    const cargarAutores = () => {
        fetch("/autor/get")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((autor) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${autor.id_autor}</td>
                        <td>${autor.nombre_autor}</td>
                        <td>${autor.apellido_autor}</td>
                        <td>${autor.fecha_autor}</td>
                    `;
                    tablaAutoresBody.appendChild(row);
                });
            })
            .catch((error) => {
                console.error("Error al cargar los autores:", error);
            });
    };

    // Función para cargar los libros desde el backend
    const cargarLibros = () => {
        fetch("/libro/get")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((libro) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${libro.id_libro}</td>
                        <td>${libro.titulo_libro}</td>
                        <td>${libro.fecha_libro}</td>
                        <td>${libro.precio_libro}</td>
                        <td>${libro.id_autor}</td>
                    `;
                    tablaLibrosBody.appendChild(row);
                });
            })
            .catch((error) => {
                console.error("Error al cargar los libros:", error);
            });
    };

    // Cargar datos al cargar la página
    cargarAutores();
    cargarLibros();
    
});

// Función para filtrar la tabla según la opción seleccionada (autores o libros)
function filtrarTabla() {
    var filtro = document.getElementById("filtroTabla").value;
    var textoBusqueda = document.getElementById("inputBusqueda").value.toLowerCase();

    if (filtro === "autores") {
        filtrarTablaAutores(textoBusqueda);
    } else if (filtro === "libros") {
        filtrarTablaLibros(textoBusqueda);
    }
}

// Función para filtrar la tabla de Autores por nombre y apellido
function filtrarTablaAutores(textoBusqueda) {
    var filas = document.getElementById("tbodyAutores").getElementsByTagName("tr");

    for (var i = 0; i < filas.length; i++) {
        var nombre = filas[i].getElementsByTagName("td")[1].innerText.toLowerCase();
        var apellido = filas[i].getElementsByTagName("td")[2].innerText.toLowerCase();

        if (nombre.includes(textoBusqueda) || apellido.includes(textoBusqueda)) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

// Función para filtrar la tabla de Libros por título
function filtrarTablaLibros(textoBusqueda) {
    var filas = document.getElementById("tbodyLibros").getElementsByTagName("tr");

    for (var i = 0; i < filas.length; i++) {
        var titulo = filas[i].getElementsByTagName("td")[1].innerText.toLowerCase();

        if (titulo.includes(textoBusqueda)) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const idAutoresSelect = document.getElementById("id_autores");
    const idAutoresUpdateSelect = document.getElementById("id_autores_update");
    const autoresDeleteSelect = document.getElementById("autores_delete");
    const autoresLUpdateSelect = document.getElementById("autoresL_update");
    const libroUpdate = document.getElementById("libro_update");
    const libroDelete = document.getElementById("libro_delete");

    // Función para cargar las opciones de autores en los selectores
    const cargarAutores = () => {
        fetch("/autor/get")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((autor) => {
                    // Opción para los formularios de Autores
                    const option = document.createElement("option");
                    option.value = autor.id_autor;
                    option.textContent = autor.nombre_autor + " " + autor.apellido_autor;
                    idAutoresSelect.appendChild(option);

                    // Opción para el formulario de Actualización de Autores
                    const optionUpdate = document.createElement("option");
                    optionUpdate.value = autor.id_autor;
                    optionUpdate.textContent = autor.nombre_autor + " " + autor.apellido_autor;
                    idAutoresUpdateSelect.appendChild(optionUpdate);

                    // Opción para el formulario de Eliminación de Autores
                    const optionDelete = document.createElement("option");
                    optionDelete.value = autor.id_autor;
                    optionDelete.textContent = autor.nombre_autor + " " + autor.apellido_autor;
                    autoresDeleteSelect.appendChild(optionDelete);
                });

                // Opciones para los formularios de Libros
                data.forEach((autor) => {
                    const optionLUpdate = document.createElement("option");
                    optionLUpdate.value = autor.id_autor;
                    optionLUpdate.textContent = autor.nombre_autor + " " + autor.apellido_autor;
                    autoresLUpdateSelect.appendChild(optionLUpdate);
                });
            })
            .catch((error) => {
                console.error("Error al cargar las opciones de autores:", error);
            });
    };
    const cargarLibros = () => {
        fetch("/libro/get")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((libro) => {

                    // Opción para el formulario de Actualización de Autores
                    const option = document.createElement("option");
                    option.value = libro.id_libro;
                    option.textContent = libro.titulo_libro;
                    libroDelete.appendChild(option);
                });
            })
            .catch((error) => {
                console.error("Error al cargar las opciones de autores:", error);
            });
    };
    const cargarLibros2 = () => {
        fetch("/libro/get")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((libro) => {
                    // Opción para los Eliminación de Libros
                    const option = document.createElement("option");
                    option.value = libro.id_libro;
                    option.textContent = libro.titulo_libro;
                    libroUpdate.appendChild(option);
                });
            })
            .catch((error) => {
                console.error("Error al cargar las opciones de autores:", error);
            });
    };
    // Llamada a la función para cargar autores cuando se carga la página
    cargarAutores();
    cargarLibros();
    cargarLibros2();
});

const form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    form.classList.add('was-validated');
});
