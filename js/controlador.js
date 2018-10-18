const btnAgregar= document.querySelector('#formulario').addEventListener("submit",agregarTarea);
const listaTareas = document.querySelector('.lista').addEventListener('click',borrarTarea);
const div = document.querySelector('.lista'); 

document.addEventListener('DOMContentLoaded', regargaLocalStorage);

function agregarTarea(e){
    
    e.preventDefault();
    const tarea = document.getElementById('text-Tarea').value;

    if (tarea == '') {
      alert('Por favor ingrese una tarea.')
    } else {
    const li = document.createElement('li');
    const btnBorrar = document.createElement('a');
    btnBorrar.classList.add('borrarTarea');
    btnBorrar.innerHTML = 'x';

    li.innerHTML = tarea;
    li.appendChild(btnBorrar);

    div.appendChild(li);

    agregarTarea(tarea);

    limpiarTexArea();
    }
    

};


function borrarTarea(e){
   
  e.preventDefault();

  if(e.target.className === 'borrarTarea'){
     
    e.target.parentElement.remove();

    eliminarTarea(e.target.parentElement.innerText);
  }

};

function regargaLocalStorage(){

  let tareas = obtenerTareas();

  tareas.forEach(tarea => {
    const li = document.createElement('li');
    const btnBorrar = document.createElement('a');
    btnBorrar.classList.add('borrarTarea');
    btnBorrar.innerHTML = 'x';

    li.innerHTML = tarea;
    li.appendChild(btnBorrar);

    div.appendChild(li);
  });

}

function eliminarTarea(tarea){
  let tareas;
      borrarTarea;

      borrarTarea = tarea.substring(0,tarea.length -1);
      tareas =obtenerTareas();

      tareas.forEach((tarea,index)=>{
        if(borrarTarea == tarea){
          tareas.splice(index , 1);
        }
      });
      
      localStorage.setItem('tareas', JSON.stringify(tareas));
}

function limpiarTexArea(){
   document.getElementById('text-Tarea').value = '';

}
