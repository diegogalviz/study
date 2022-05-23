// function miFuncion (a,b){
//     console.log(arguments.length)
//     return a+b;
// }

// //Llamando a la funcion
// let resultado = miFuncion(2,3);
// console.log(resultado)


// // declaracion de funcion de tipo Expresion
// let sumar = function (a=4,b=5) {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     return a + b
// };

// resultado = sumar(3,6);
// console.log(resultado);


// llamado de la misma funcion

// (function (a , b){
//     console.log('Ejecutando la funcion: '+ (a + b));
// })(3,4)


// var miFuncion = miFuncion.toString();
// console.log(miFuncion);

// //Fumciones de tipo flecha

// const sumarFuncionTipoFlecha = (a, b) => a + b;

// console.log(sumarFuncionTipoFlecha(2,3))

let resultado = sumarTodo (5,4,13,10,9,89);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(resultado)



