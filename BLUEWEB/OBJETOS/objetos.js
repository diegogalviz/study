/*
const nombre de objeto = {
    atributo1: valor,
    atributo2: valor
}
*/

const gato = {
    nombre : " valiente",
    duerme : true,
    edad : 10,
    enemigos : ["agua", "perros"],
    otros : {
        amigos :["cobarde", "Timido"],
        favoritos : {
            comida : {
                frio : "Salmon",
                caliente: "pollo"
            }
        }
    }
}


//objetos dentro de objetos como navegar

console.log(gato.otros.favoritos.comida.frio);
console.log(gato.otros.amigos[0])

// Acceder a los valores del objeto
console.log(typeof gato) // tipo de objeto
console.log(gato.nombre)
console.log(gato["nombre"])
console.log(gato.duerme)
console.log(gato["enemigos"])
console.log(gato["enemigos"][0])
console.log(gato.enemigos[1])

//crear
gato.color = "azul";
console.log(gato)

//editar
gato.edad = 5
console.log(gato)

//eliminar
delete gato.duerme
console.log(gato)

// # hasOwnProperty

if (gato.hasOwnProperty("nombre")){
    gato.nombre = " Flojera"
}
console.log(gato["nombre"])

console.log(gato.hasOwnProperty("nombre")) // verifica si el objeto tiene alguna propiedad
