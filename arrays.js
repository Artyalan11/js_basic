//Array conjunto de elementos, tipo objeto, guarda valores (numeros, string, arrays), estrucutura de datos

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);


var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

//Métodos para mutar array

var masFrutas = frutas.push("Uvas"); //push agregar elementos al array

frutas;

var ultimo = frutas.pop("Uvas"); //pop elimina último elemento

var nuevaLongitud = frutas.unshift("Uvas"); // agrega un nuevo elemento al principiop del array a diferencia de push que lo manda al final!

var borrarFruta = frutas.shift("Uvas"); //borrar elemento qyue esté en el inicio

var posicion = frutas.indexOf("Cereza"); // Saber la posición del item en el array :)




console.log(frutas.length); //saber longitud del array

console.log(frutas[2]); // ingresar a los ementos del array
