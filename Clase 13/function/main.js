/*

function saludar(nombre) {
    if (typeof nombre === "string") {
        console.log(`Hola ${nombre}`);
    } else {
        console.error(`Tipo de dato invalido`);
    
    }

}

*/

/*
function saludar(nombre = "Extraño") {
    if (typeof nombre !== "string") {
        console.error(`Tipo de dato no valido`);
    } else {
        console.log(`Hola, ${nombre}`);
    
    }

}


saludar("Pepe");
saludar("Sebastian");
saludar()
saludar(21)
saludar(41)

*/
/*
function suma(n1, n2) {
    console.log(n1 + n2);
}

suma(10, 40);
suma(10, "20");

*/

// Objetos y arrays como parametros

/*

const nombres = [`Juan`, `Sebastian`];
function saludarArra(_nom = []) {
    for(let i= 0; i < _nom.length; i++) {
        console.log(_nom[i]);
    }
   

}
saludarArra(nombres);
saludarArra();
*/

/*
function suma(n1, n2) {
    return n1 + n2;
}

let resultado = suma(10, 20)

console.log(resultado);
*/

// funciones que devuelve

function codigo(nombre, apellido, edad) {
    let codigoDto = nombre[0] + apellido[0], edad;
    return codigoDto;
}

const codigo1 = codigo("Juan", "Sebastian", 29);
console.log(codigo1);