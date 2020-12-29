//Método push: para agregar nuevos elemnentos a un arreglo
// Array inicial
let numArray = [1,2,3,4,5];

// Función
function newNum() {
    //agrego elementos
    numArray.push(6,7)
    //Reviso el array que ahora tuene los números agregados
    console.log(numArray)
}

//Método push con strings

//Array Inicial
let txtArray = ["Ana", "Juan", "Diego", "Laurato"]
//Función
function addCharacters() {
    //Agrego elementos
    txtArray.push("Chris", "Maria")
    //Revisa el array que ahora tiene los nombres agregados
    console.log(txtArray);
}

// Método shift() Elimina el elemento con indice 0

//Cramos array
let numArray = [1, 2, 3, 4, 5];
console.log(numArray)

//Aplicamos .shift()
let shiftArray = numArray.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(numArray);

// Método pop() Elimina el último elemento del array

//Cramos array
let numArray = [1, 2, 3, 4, 5];
console.log(numArray)

//Aplicamos .pop()
let shiftArray = numArray.pop()

//Revisamos.
console.log(numArray)