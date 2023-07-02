// Definición de la clase Tarea
class Tarea {
    private descripcion: string;
    private completa: boolean;
  
    constructor(descripcion: string) {
      this.descripcion = descripcion;
      this.completa = false;
    }
  
    public obtenerDescripcion(): string {
      return this.descripcion;
    }
  
    public estaCompleta(): boolean {
      return this.completa;
    }
  
    public marcarCompleta(): void {
      this.completa = true;
    }
  
    public marcarPendiente(): void {
      this.completa = false;
    }
  }
  
  // Variables globales
  const aTareas: Tarea[] = [];
  const btnAgregar = document.getElementById('btnAgregar');
  const listaTareas = document.getElementById('listaTareas');
  
  // Función para agregar una tarea
  function agregarTarea() {
    const inputTarea = document.getElementById('inputTarea') as HTMLInputElement;
    const descripcion = inputTarea.value;
  
    if (descripcion.trim() !== '') {
      const tarea = new Tarea(descripcion);
      aTareas.push(tarea);
      inputTarea.value = '';
      dibujarTarea();
    }
  }
  
  // Función para renderizar las tareas en la lista
  function dibujarTarea() {
    listaTareas.innerHTML = '';
  
    aTareas.forEach((tarea, index) => {
      const liTarea = document.createElement('li');
      liTarea.textContent = tarea.obtenerDescripcion();
  
      if (tarea.estaCompleta()) {
        liTarea.classList.add('completa');
      }else{
        liTarea.classList.add('pendiente');
      }
  
      const btnBorrar = document.createElement('button');
      btnBorrar.textContent = 'Eliminar';
      btnBorrar.classList.add('btn');
      btnBorrar.classList.add('btn-danger');
      btnBorrar.addEventListener('click', () => {
        eliminarTarea(index);
      });
  
      liTarea.addEventListener('click', () => {
        if (tarea.estaCompleta()) {
          tarea.marcarPendiente();
        } else {
          tarea.marcarCompleta();
        }
        dibujarTarea();
      });
  
      liTarea.appendChild(btnBorrar);
      listaTareas.appendChild(liTarea);
    });
  }
  
  // Función para eliminar una tarea
  function eliminarTarea(index: number) {
    aTareas.splice(index, 1);
    dibujarTarea();
  }
  
  // Evento click para agregar tarea
  btnAgregar.addEventListener('click', agregarTarea);
  
