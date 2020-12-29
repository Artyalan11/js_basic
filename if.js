if (true) {
    console.log("hola");
} else {
    console.log("soy falso");
}


var edad = 18;

if (edad === 18) {
    console.log("Hey puedes votar, será tu primera vez");
} else if ( edad > 18) {
    console.log ("Puedes votar de nuevo");
} else {
    console.log ("aún no puedes votar");
}

Operador ternario
Sintaxis
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "No , no soy uno";


var tijera = "tijera";
var papel = "papel";
var piedra = "piedra";

var jugador = piedra;

var cpu = ["tijera", "papel", "piedra"];
min = Math.ceil(0);
max = Math.floor(2);
var random = Math.floor(Math.random() * (max - min + 1)) + min;
var cpu = cpu[random];
console.log(random);
console.log(cpu);


function miFuncion() {
    debugger;
    if ( tijera && cpu === "tijera" ) {
        console.log("empate");
    } else if ( tijera && cpu === "papel") {
        console.log("ganas");
    } else if ( tijera && cpu === "piedra") {
        console.log("pierdes");
    } else if ( papel && cpu === "papel") {
        console.log("empate");
    } else if ( papel && cpu === "piedra") {
        console.log("ganas");
    } else if ( papel && cpu === "tijera") {
        console.log("pierdes");
    } else if ( piedra && cpu === "tijera") {
        console.log("ganas");
    } else if ( piedra && cpu === "papel") {
        console.log("pierdes");
    } else if ( piedra && cpu === "piedra") {
        console.log("empate");
    }
}

console.log(cpu);
miFuncion(piedra);






var tijera = "tijera";
var papel = "papel";
var piedra = "piedra";

var cpu = ["tijera", "papel", "piedra"];
min = Math.ceil(0);
max = Math.floor(2);
var random = Math.floor(Math.random() * (max - min + 1)) + min;
var cpu = cpu[random];

console.log(cpu);

function miFuncion() {
    debugger;
    if (tijera && cpu === "tijera") {
        console.log("empate");
    } else if (tijera && cpu === "papel") {
        console.log("gana tijera");
    } else if (tijera && cpu === "piedra") {
        console.log("pierde tijeras");
    }
    else if (papel && cpu === "papel") {
        console.log("empate");
    } else if (papel && cpu === "piedra") {
        console.log("gana papel");
    }
    else if (piedra && cpu === "piedra") {
        console.log("empate");
    }
}

console.log(cpu);
miFuncion(papel, cpu);

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

const cpu = ["piedra", "papel", "tijera"];
const random = Math.floor(Math.random() * cpu.length);
console.log(random, cpu[random]);
var ia = cpu[random];

function miFuncion(user, ia) {
    if (user != ia) {
        if (user === op1 && ia === op3) {
            console.log("el usuario GANO con " + op1);
        } else if (user === op1 && ia === op2) {
            console.log("el usuario PERDIO con " + op2);
        } else if (user === op2 && ia === op1) {
            console.log("el usuario GANO con " + op2);
        } else if (user === op2 && ia === op3) {
            console.log("el usuario PERDIO con " + op3);
        } else if (user === op3 && ia == op2){
            console.log("el usuario GANO con " + op3);
        } else if (user === op3 && ia === op1) {
            console.log("el usuario PERDIO con " + op1);
        }
    } 
    else{
        console.log("empate");
    }
}

miFuncion(op1,ia);