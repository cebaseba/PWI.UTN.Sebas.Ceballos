console.log('Nombre');
const nombre = "Juán";
const apellido = "Migliore";
/*
module.exports = {
    nombre: nombre,
    apellido: apellido
}
*/
function saludar(nombre) {
    console.log('Hola' + nombre);
}

module.exports = {
    saludar: saludar

};