/*
Ejemplos de tipos 
de datos 
en JavaScript
*/
//Tipo de dato String
var nombre ="Carlos";
console.log(nombre);

//typeof define el tipo de dato de la variable. con typeof podemos preguntar el tipo de dato de cada variable
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);


//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objet
var objeto ={
    nombre : "Juan",
    apellido : "Perez",
    telefono : "532156122132"
}

console.log(objeto)
console.log(typeof objeto)


//Tipo de dato boolean (true, false)

var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido; 
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);



//null = ausencia de valor

var y  = null;
console.log(y);
console.log(typeof y);

//Tipo arreglos que es un object. no es un nuevo tipo de datos
var autos = ['BMW','AUDI','VOLVO'];
console.log(autos);
console.log(typeof autos)

//cadena vacia. no es un tipo de datos sino un valor que podemos asignar

var z = '';
console.log(z);
console.log(typeof z);

