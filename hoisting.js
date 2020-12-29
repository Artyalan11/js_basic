//Cuando las variables y las funciones se procesan antes de que se ejecuten cualquier tipo de código

var miNombre = undefined;
console.log(miNombre + "soy ese hoisting");
miNombre = "Alan";



hey();
function hey(){
    console.log("hola " + miNombre);
}

var miNombre = "Alan";






