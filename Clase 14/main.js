
//EXPERIMENTO H1
/*
const h1 = document.querySelector("h1");
console.log(h1);
console.dir(h1);


//interaccion con el usuario y cambio de estilos.
let color = prompt("Ingrese un color en inglés")
h1.style.color = color;
h1.style.fontSize = '35px';

*/
//EXPERIMENTO CON H2
/*
const allh2 = document.querySelectorAll("h2");
console.log(allh2)

for (let i=0; i < allh2.length; i++) {
    allh2[i].style.color = prompt("Ingrese color")
}
*/
// 1. Tengo un Array
// 2. Ejecuto un metodo de los arrays que se llama foreach
//allH2.foreach();
// 3. Este metodo es similar al bluque for, y va a recibir como parametro una funcion anonima function(){}
// allH2.forEach(  function(){}   )
// 4. Bonus. La funcion anonima va a recibir como parametro CADA ELEMENTO DEL ARRAY
/*
const allh2 = document.querySelectorAll("h2");
allh2.forEach(function(item) {
    console.log(item);
});
*/

// 1er vuelta => primer h2
// 2da vuelta => segundo h2
// 3er vuelta => tercer h2

// Parametros en string que acepta querySelector
/*
const h2 = document.querySelector('tagName');
const h2 = document.querySelector('.nombreDeClase');
const h2 = document.querySelector('#id');
const h2 = document.querySelector('.mainNav ul');
*/

// Agregar clases desde JS
/*
const p = document.querySelector(".mainP");
console.dir(p)
p.classList.add('highlight');
//p.classList.add('highlight');
// toggle => si tiene la clase, la elimino y si no tiene la clase, la agrego.

const a = document.querySelector("a");
const hrefvalor = a.getAttribute("href");
console.log(hrefvalor);
a.getAttributeNS('href'); //https://google.com
a.setAttribute("href", "https://yahoo.com.ar");
*/

/* contenido para cambiar una etiqueta */
const span = document.querySelector(".span-content");
console.log(span.textContent);

span.textContent = "CHINGA TU MADRE";
span.innerHTML = '<a href = "#">ir a Google</a>'

/* CONCLUSION:
SIEMPRE USAMOS EL MISMO SISTEMA:

1. Seleccionamos elemntos
2. los modificamos
 - Clases (classlist)
  - Estilos (style)
 - Atributos (setAttribute / getAttribute)
 - Contenidos (textContent / innerHTML)
 */
