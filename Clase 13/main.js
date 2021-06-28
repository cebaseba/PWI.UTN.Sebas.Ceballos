// objetos => tipo de dato. se le agregan caracteristicas

let persona = {
    nombre: "Sebastian",
    edad: 41,
    ComidasPreferidas: ['pasta', 'asado', 'papas']
}

// ¿cual es la segunda comida preferida de sebastian?
console.log(persona.ComidasPreferidas);

for(let i=0; i < persona.ComidasPreferidas.length; i++) {

    console.log(persona.ComidasPreferidas[i]);
}


/*
let persona = [  
    nombre: "Sebastian",
    edad: 41,
    ComidasPreferidas: ['pasta', 'asado', 'papas']
},

{
    nombre: "Natalia",
    edad: 41,
    ComidasPreferidas: ['paty', 'sopa', 'tarta']
}
]
*/
