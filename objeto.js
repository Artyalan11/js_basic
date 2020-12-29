//objeto con 3 propiedades 
var miAuto = { 
    marca: "Toyota", //Propiedad: valor
    modelo: "Corolla",
    anno: 2020,
    detalleDelAuto: function(){ //Función dentro de un objeto es método de objeto
        console.log(`Auto ${this.modelo} ${this.anno}`); //This hace refencia al objeto e.g this.modelo = miAuto.modelo
    }
}; 

miAuto.marca //llamar valor de objeto

miAuto.detalleDelAuto(); //llamada a una función dentro del objeto





/////////////////////////////   Funcion constructora

function auto(marca, modelo, anno){
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020); // new sirve para crear un nueva instancia de nuestra funcion constructora. Instancia es genrar un objeto que deriva de otro objeto.
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);



//////////////reto///////////////////////////////
 
var listaAutos = [];

function auto(marca, modelo, anno) {
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
}

function addAutos(){
    var numeroAutos = prompt("Numero de vehiculos que desea agregar")
    for (var i = 0; i < numeroAutos; i++) {
        var marca = prompt("Agrega la marca del vehiculo");
        var modelo = prompt("Agrega el modelo del vehiculo");
        var anno = prompt("Agrega el año del vehiculo");
        listaAutos.push(new auto (marca, modelo, anno));
        console.log(listaAutos[i]);
    }
    
};



addAutos();