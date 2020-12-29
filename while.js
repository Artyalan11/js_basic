var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log (`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //shift es una propiedad de array donde el arreglo va mutando en cada interacción, cada que pasa un ciclo , un nombre del estudiante va saliendo del arreglo
    saludarEstudiantes(estudiante);
}