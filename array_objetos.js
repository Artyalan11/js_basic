//Array
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo:2500},
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// 
var nombreArticulos = articulos.map(function(articulo){  //mapea todo el contenido del array dependiendo de lo que necesites en este caso mapea los nombres de los articulos
    return articulo.nombre
});

articulosFiltrados

// 
var articulosFiltrados = articulos.filter(function(articulo){ //filtra cosas especificas dentro del arreglo
    return articulo.costo <= 500
});

// validar si existe o no, generando un nuevo array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// for each , Hace el filtrado sobre el array creado en este caso articulos

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Some: regresar una validación de verdadero o falso sobre articulos que cumplan esa validación, se genera un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});