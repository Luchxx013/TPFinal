// Definición de la clase Tarea
var Tarea = /** @class */ (function () {
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completa = false;
    }
    Tarea.prototype.obtenerDescripcion = function () {
        return this.descripcion;
    };
    Tarea.prototype.estaCompleta = function () {
        return this.completa;
    };
    Tarea.prototype.marcarCompleta = function () {
        this.completa = true;
    };
    Tarea.prototype.marcarPendiente = function () {
        this.completa = false;
    };
    return Tarea;
}());
// Variables globales
var aTareas = [];
var btnAgregar = document.getElementById('btnAgregar');
var listaTareas = document.getElementById('listaTareas');
// Función para agregar una tarea
function agregarTarea() {
    var inputTarea = document.getElementById('inputTarea');
    var descripcion = inputTarea.value;
    if (descripcion.trim() !== '') {
        var tarea = new Tarea(descripcion);
        aTareas.push(tarea);
        inputTarea.value = '';
        dibujarTarea();
    }
}
// Función para renderizar las tareas en la lista
function dibujarTarea() {
    listaTareas.innerHTML = '';
    aTareas.forEach(function (tarea, index) {
        var liTarea = document.createElement('li');
        liTarea.textContent = tarea.obtenerDescripcion();
        if (tarea.estaCompleta()) {
            liTarea.classList.add('completa');
        }
        else {
            liTarea.classList.add('pendiente');
        }
        var btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Eliminar';
        btnBorrar.classList.add('btn');
        btnBorrar.classList.add('btn-danger');
        btnBorrar.addEventListener('click', function () {
            eliminarTarea(index);
        });
        liTarea.addEventListener('click', function () {
            if (tarea.estaCompleta()) {
                tarea.marcarPendiente();
            }
            else {
                tarea.marcarCompleta();
            }
            dibujarTarea();
        });
        liTarea.appendChild(btnBorrar);
        listaTareas.appendChild(liTarea);
    });
}
// Función para eliminar una tarea
function eliminarTarea(index) {
    aTareas.splice(index, 1);
    dibujarTarea();
}
// Evento click para agregar tarea
btnAgregar.addEventListener('click', agregarTarea);
