// ---------------------------------------------------------------------------------
// Programa para adivinar un numero aleatorio

// let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(numeroMaquina);
// let numeroUsuario = parseInt(prompt("Ingrese un numero"));
// let vidas = 3;

// while (numeroMaquina !== numeroUsuario && vidas > 1) {
//   let mensaje =
//     numeroMaquina < numeroUsuario
//       ? "El numero es menor"
//       : " el numero es mayor";
//   console.log("Te equivocaste " + mensaje);
//   numeroUsuario = parseInt(prompt("Ingrese un numero del 1 al 10"));
//   vidas--;
// }

// let mensajeDos =
//   numeroMaquina === numeroUsuario ? " Ganaste!" : "Perdiste intentos agotados!";

// console.log(mensajeDos);
// ---------------------------------------------------------------------------------

// arreglo o objeto iterable
// let frutas = ["platano", "Sandia", "perita"];

// for normal

// for(let i = 0; i , i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// // for of como el de python
// for (let fruta of frutas) {
//   console.log(fruta);
// }

// console.log(frutas);

// ---------------------------------------------------------------------------------

// Funciones
// let nombreUsuario = "Diego"

// function Saludar (nombre){
//     return ("Bienvenido " + nombre+"!")
// }
// console.log(Saludar(nombreUsuario))


// let nombres = ["diego", 'Anneth']
// for (let nombre of nombres){
//     console.log(nombre)
// }
// for (i = 0; i < nombres.length; i++){
//     console.log(nombres[i])
// }


// let nombreUsuario1 = "Diego";
// let estado = true

// console.log(`Bienvenido: 
// ${nombreUsuario1.toUpperCase()}
// ${nombreUsuario ? "en linea" : "offline"}
// `);

// ---------------------------------------------------------------------------------

// let estado = true

// if(estado){

//     console.log("Entro al if")
//     let estado = false
//     console.log("Dentro del if")

// }

// console.log(estado)

// ---------------------------------------------------------------------------------

// const frutas = ["Sandia", "Pera"]

// frutas.push("Banana")
// frutas.unshift("Manzana")
// const frutaEliminada =  frutas.pop()
// const frutaEliminadaalinicio =  frutas.shift()

// console.log(frutaEliminadaalinicio)
// console.log(frutaEliminada)
// console.log(frutas)

// ---------------------------------------------------------------------------------

// EJERCICIO DE FRUTAS

// const inputMessage = "🍒 ingrese la fruta que quieras comprar 🛒";
// const outputMessage = "🍒 Compraste las suguientes frutas";
// const askMessage = "🍒 Deseas volver a comprar otra fruta?";

// const frutas = [];
// const fruta = prompt(inputMessage);

// frutas.push(fruta)

// while(confirm(askMessage)){
//     const fruta = prompt(inputMessage);
//     frutas.push(fruta);
// }

// for(const fruta of frutas){
//     console.log(fruta);
// }

// ---------------------------------------------------------------------------------

// FUNCIONES DECLARATIVAS 

// function numeroAleatorio(min, max){
//     return Math.floor(Math.random()* (max - min)) + min;
// }
// console.log(numeroAleatorio(5, 25))

// // FUNCIONES EXPRERSADA 

// const numAzar = function numeroAleatorio(min, max){
//     return Math.floor(Math.random()* (max - min)) + min;
// }
// console.log(numeroAleatorio(5, 25))

// // FUNCIONES DE FLECHA

// // const azarFlecha = (min, max) => {
// //     return Math.floor(Math.random()* (max - min)) + min;
// // }


// const azarFlecha = (min= 1, max= 100) => Math.floor(Math.random()* (max - min)) + min;
   
// console.log(azarFlecha())


// ---------------------------------------------------------------------------------

// FOR EACH GENIAL

frutas = ["Manzana", "Pera", "limon"]

// frutas.forEach(fruta => console.log(fruta));

frutas.forEach((fruta, index, array) => {
    console.log(`${index}: ${fruta}`);
    console.log(array);
});
