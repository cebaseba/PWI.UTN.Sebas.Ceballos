function add(x1, x2) {
    return x1 + x2;
}
function restar(x1, x2) {
    return x1 - x2;
}
function multipl(x1, x2) {
    return x1 * x2;

}
function dividir(x1, x2) {
        
        if (x2 === 0) {
            console.log('No se puede dividir por 0');
        } else {
            return x1 / x2;
        }
    
}
console.log(dividir(1,0));
