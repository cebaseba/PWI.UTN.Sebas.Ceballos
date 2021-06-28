// Practica de OBJETOS

/*let blog = {

    id: 1,
    titulo: "Programación",
    autor: "Ceballos",
    categoria: "Software"
}

blog.autor = "desconocido";
blog.id = "22";

console.log(blog.id);
console.log(blog.titulo);
console.log(blog.autor);
console.log(blog.categoria);
*/

let blog = [
    {
        id: 1,
        titulo: "Programación Basica",
        autor: "Ceballos S.",
        categoria: "Software"
    },
    {
        id: 2,
        titulo: "Programación Intermedia",
        autor: "Ceballos S.",
        categoria: "Software"
    },
    {
        id: 3,
        titulo: "Programació Avanzada",
        autor: "Casalnovo J.",
        categoria: "Software"
    }

]

for (let i=0; i<blog.length; i++) {

    let actual = blog[i];
    console.log(actual.id);
    console.log(actual.titulo);
    console.log(actual.autor);
    console.log(actual.categoria);

}

let acumulador = 0;
while(10 > acumulador) {
    acumulador++;
    console.log(acumulador);
}


