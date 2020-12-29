var numero = 1;

switch(numero){
    case 1:
        console.log("soy uno!");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("soy un 100!");
        break;
    default:
        console.log("No soy nada");
}


var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

const cpu = ["piedra", "papel", "tijera"];
const random = Math.floor(Math.random() * cpu.length);
// console.log(random, cpu[random]);
console.log("La computadora selecciono "+ cpu[random]);

var ia = cpu[random];

function miFuncion(user, ia){
// debugger;
    console.log("El usuario selecciono " + user);
    switch(true){
        
        case user === op1 && ia === op3:
            console.log("el usuario GANO con " + op1);
            break;
        case user === op1 && ia === op2:
            console.log("el usuario PERDIO contra " + op2);
            break;
        case user === op2 && ia === op1:
            console.log("el usuario GANO con " + op2);
            break;
        case user === op2 && ia === op3:
            console.log("el usuario PERDIO contra " + op3);
            break;
        case user === op3 && ia == op2:
            console.log("el usuario GANO con " + op3);
            break;
        case user === op3 && ia === op1:
            console.log("el usuario PERDIO contra " + op1);
            break;
        case user === ia:
            console.log("Empate");
            break;
        default:
            console.log("No soy nada");
    }
}
miFuncion(op1,ia);