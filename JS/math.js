
// creo un objeto vacio
const Math = {};

function add(x1, x2) {
    return x1 + x2
}

function subs(x1, x2) {
    return x1 - x2
}

function multiply(x1, x2) {
    return x1 * x2
}

function divide(x1, x2) {
    if (x2 === 0) {
        console.log("no se puede dividir entre 0");
    } else {
        return x1 / x2;
    }
}

// otra forma de exportar es pasando propiedades de un objeto

Math.add = add;
Math.subs = subs;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

// primer forma de esportar de eun modulo a otro sin crear un objeto
/*
exports.add = add;
exports.subs = subs;
exports.multiply = multiply;
exports.divide = divide;
*/