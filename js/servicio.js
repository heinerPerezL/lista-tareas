function agregarTarea(pTarea){
    let tarea=obtenerTareas();
        tarea.push(pTarea);

     localStorage.setItem('tareas',JSON.stringify(tarea));

};


function obtenerTareas(){
    
    let aTareas = [];
    let tareasLocal= localStorage.getItem('tareas');

    if (tareasLocal === null) {
        aTareas = [];
    } else {
        aTareas = JSON.parse(localStorage.getItem('tareas'));
    }

    return aTareas;

};


























/*

function obtenerTareas(){
    let tareas= [];
    let tarea = localStorage.getItem('tareas');

    if (tarea === null) {
        tareas= [];
    }else{
        tareas = JSON.parse(localStorage('tareas'));
    }

    return tareas;

    
}*/