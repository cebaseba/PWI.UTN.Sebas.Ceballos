/*const edades = [1, 24, 23, 44];
const edades2 = edades.slice(); //.slice() crea otro espacio en memoria (copiar). si no se lo pongo, solo crea una referencia
edades2.push(87);
console.log(edades);
console.log(edades2);
*/


    let listados = [];
    for (let i = 0; i < 5; i++) {
        listados.push(prompt("Ingrese un item"));
        alert("Se agrego el item a la lista");
    }
    alert("el resto es " + listados)
    console.log(listados);

    



