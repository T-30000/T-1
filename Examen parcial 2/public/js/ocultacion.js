// Función para ocultar todos los formularios
function ocultarTodosFormularios() {
    document.getElementById("autor-form-insert").classList.add("hide");
    document.getElementById("libro-form-insert").classList.add("hide");
    document.getElementById("autor-form-update").classList.add("hide");
    document.getElementById("libro-form-update").classList.add("hide");
    document.getElementById("autor-form-delete").classList.add("hide");
    document.getElementById("libro-form-delete").classList.add("hide");
}


// Función para ocultar todos los formularios y mostrar el formulario de nuevo autor
function nuevoAutor() {
    ocultarTodosFormularios();
    document.getElementById("autor-form-insert").classList.remove("hide");
}

// Función para ocultar todos los formularios y mostrar el formulario de nuevo libro
function nuevoLibro() {
    ocultarTodosFormularios();
    document.getElementById("libro-form-insert").classList.remove("hide");
}

// Función para ocultar todos los formularios y mostrar el formulario de actualizar autor
function actualizarAutor() {
    ocultarTodosFormularios();
    document.getElementById("autor-form-update").classList.remove("hide");
}

// Función para ocultar todos los formularios y mostrar el formulario de actualizar libro
function actualizarLibro() {
    ocultarTodosFormularios();
    document.getElementById("libro-form-update").classList.remove("hide");
}

// Función para ocultar todos los formularios y mostrar el formulario de eliminar autor
function eliminarAutor() {
    ocultarTodosFormularios();
    document.getElementById("autor-form-delete").classList.remove("hide");
}

// Función para ocultar todos los formularios y mostrar el formulario de eliminar libro
function eliminarLibro() {
    ocultarTodosFormularios();
    document.getElementById("libro-form-delete").classList.remove("hide");
}

