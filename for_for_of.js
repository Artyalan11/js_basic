var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
//Loop que ejecutará la tarea de saludar a los estudiantes que estén dentro del array
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    // console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}


///////////otra forma for off//////////////////

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// estudiantes es array en plural por que tiene a un grupo de estudiantes
//parametro estudiante es la variable en forma singular de un grupo de estudiantes (array) index
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}




// Loops o ciclo: hacer que una tarea que repita de manera automatica mientras los criterios se cumplan hasta que se rompa el ciclo.