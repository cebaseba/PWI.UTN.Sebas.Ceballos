// FUNCIONES
/*
function saludar() {
    console.log("Hola, Sebas");
}

// ahora ejecuto la función.
saludar();
*/

// FUNCIONES PASANDO UN PARAMETRO (nombre)

/*
function saludar(nombre) {
    if (typeof nombre === "string") {
        console.log(`Hola, ${nombre}`);
    } else {console.error('No es un nombre');
    }    
}

// ahora ejecuto la función.
saludar("Juan");
saludar("Norberto");
saludar("Hugo");
saludar("Ricardo");
saludar(23);
*/

// EN ESTA FUNCION LE PASO UN VALOR A UNA FUNCIÓN SALUDAR(), ME DEVUELVE "EXTRAÑO"
/*
function saludar(nombre = "Extraño") {
    if (typeof nombre !== "string") {
        console.error('Tipo de dato invalido');
    } else {
        console.log(`Hola, ${nombre}`);
    }    
}
saludar("María");
saludar("José");
saludar("Ruben");
saludar(22);
saludar();
*/

//FUNCION PASANDO 2 PARAMETROS

/*function suma(num1, num2) {
    let resultado = (num1+num2);
    console.log(resultado);
}
suma(10,31); //41
suma(2,2); //4

*/

// FUNCION - OBJETOS Y ARRAYS COMO PARAMETROS

/*
const nombres = ['Juan', 'Pedro', 'Ramiro', 'Sofia'];

function saludoArr(_nombres = []){
    for(let i=0; i < _nombres.length; i++) {
        console.log(_nombres[i]);
    }
}
saludoArr(nombres);
saludoArr(["Ramon", "Roberto"]);
saludoArr([23]);
saludoArr();
*/

// FUNCIONES CON RETURN

/*
function suma(num1, num2) {
    return num1 + num2;
}

let resultado = suma(10,31);
console.log(resultado);

*/

/*
function codigo(nombre, apellido, edad) {
    let codigoDto = nombre[0] + apellido[0] + edad;
    return codigoDto;
}
const codigo1 = codigo("Sebastian", "Ceballos", 41);
console.log(codigo1);
*/

// TOMO UN LISTADO DE JSON Y EXTRAIGO CODIGOS DE DESCUENTO TOMANDO PRIMER LETRA DEL NOMBRE Y EL ID

/*

const users = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ]`;
  const parsedUsers = JSON.parse(users);
  
  function reciboCodigos(users = []) {
    const allCodigos = [];
    for(let i = 0; i < users.length; i++) {
        let code = users[i].name[0] + users[i].id;
        allCodigos.push(code);
    }
    return allCodigos;
}
const todosCodigos = reciboCodigos(parsedUsers);
console.log(todosCodigos);

*/

