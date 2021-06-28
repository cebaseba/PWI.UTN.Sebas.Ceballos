
//  Ingresar la edad y sumarle 20
/*
let edad = prompt("Ingresa tu edad");
edad = Number(edad);
alert("Hola tu edad dentro de 20 años será " + (edad + 20));
*/



// Ingresar la edad y mostrar un cartel con el doble de su edad
/*
let edad = prompt("Ingrese su edad");
edad = Number(edad);
alert("Su edad ahora es " + edad * 2);
*/

// generar un array y mostrar un mensaje en pantalla con el valor de la posicion 2
/*
let miarray = ["Seba", true, 41, "Lomas"];
alert(miarray[2]);
console.log(miarray[1]);
alert(miarray.length); // para saber la cantidad de posicionies del array
*/


const nombres = ["Juan", "Pedro", "Wally", "Sofia", "Amelia", "Estefania"];
nombres.length;



// ************************************************************

//  EJERCICIOS SOBRE ARRAY
// ************************************************************

// Ejercicio de encontrar a Wally
/*
for(let i= 0; i < nombres.length; i++) {
    if(nombres[i] === "Wally") {
        console.log(i + "Wally, te encontré");
    }
}

*/
//  imprimir el ultimo valor del array:
/*
const mascotas = ["Pero", "Gato", "Axolote"];
for(let i = 0; i < mascotas.length; i++) {
    let ultimo = mascotas[mascotas.length - 1];
    console.log(ultimo);
}
*/
/*
const mascotas = ["Pero", "Gato", "Axolote"]
mascotas.push("Ballena");
console.log(mascotas);
*/

// lista vacia y agregar productos con un prompt
/*
let productos = [];
for (let i=0; i <= 4; i++) {

    productos= prompt("Agregue un producto"); 
    console.log(productos);
}
*/


// ¿Donde esta Wally?
/*
const nombr = ["Juan", "Pedro", "Wally", "Sofia", "Amelia", "Wally"];

for (let i=0; i < nombr.length; i++) {

    if(nombr[i] === "Wally") {
        console.log("Aca se encontro Wally" + i);
    } 

}
*/



