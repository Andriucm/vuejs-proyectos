//Opcional chaining o encadenamiento opcional

const alumno = {
    nombre : "andrei",
    clase : "Programacion 1",
    aprobado : true
}

setTimeout(() => {
    alumno.examenes = {
        examen1:100,
        examen2:100,
        examen3:100,

    }
    console.log(alumno.examenes?.examen1)
}, 3000);
    
