function agregarTarea() {
    var nuevaTarea = document.getElementById("nuevaTarea").value;
    if (nuevaTarea.trim() !== "") {
        var tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
        var fila = tabla.insertRow();
        var celda = fila.insertCell(0);
        celda.innerHTML = nuevaTarea;
        document.getElementById("nuevaTarea").value = "";
    }
}
// Obtener una referencia al botón
const botonImprimirPagina = document.getElementById('imprimirPagina');

// Agregar un manejador de eventos al botón
botonImprimirPagina.addEventListener('click', function() {
    window.print(); // Abre el diálogo de impresión del navegador
});

