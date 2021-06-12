alert("Hola visitante");

let edad = prompt("Ingresa tu edad");
console.log(typeof num); /*string*/
edad = parseInt(edad); 
console.log(typeof num); /*number*/
console.log(edad + 10); /*suma la edad + 10*/

/*para numeros puedo usar parseInt, parseFloat o Number*/

let human = prompt("desmuestra que no eres un robot")
alert("tu no eres humano, " + human);

if (edad >= 18) {
    alert("Puede pasar")
} else {
    alert("Debe ser mayor de edad")
} 
// Programa no optimo #1

let vacuna = prompt ("¿Que vacuna recibió?")
vacuna = vacuna.toLowerCase(); //Phizer => phizer... para que pueda tomar mayuscula o minuscula en la respuesta

if (vacuna == "phizer") {
    alert("Puede pasar a Europa");
} else if (vacuna == "sinopharm") {
    alert("Puede pasar a Europa");
} else if (vacuna == "johnson & johnson") {
    alert("Puede pasar a Europa");
} else { //el ultimo else se le llama "FALLBACK"
    alert("NO puede pasar a Europa");
}

let vacuna2 = prompt ("Vuelva a ingresar que vacuna?")
if (vacuna === "phizer" || vacuna === "sinopharm" || vacuna === johnson & johanson) {
    alert("Puede pasar a disfrutar de Europa")
} else {
    alert("Quedate en tu casa, pobre")
}



//Normalizacion de Strings
//vacuna = vacuna.tolowercase();


//Patron de negacion
//if (vacuna != "Sputnik") {
//   alert("Puede pasar")
//}

if ("55" === 55) {
    alert("Los numeros son iguales")
} else {
    alert("Los numeros no son iguales")
}

//  signo = es para asignar un valor
//  signo == es para comparar
//  signo === es una comparacion mas estricta, donde tambien diferencia entre tipo de valor string y numerico "55" === 55 (false)
