const gato = {
    nombre : " valiente",
    duerme : true,
    edad : 10,
    enemigos : ["agua", "perros"],
 //_________________________________________metodos_____________________________________________________________________________________
    // metodos
    comer : function(){
        console.log("gato comiendo")
    },
    // declarar metodo forma 2
    comerDos( alimento= "Purina"){
        console.log(`
        ${this.nombre}
        "esta comiendo ${alimento}"
        `)
    },

    listarEnemigos(){
        this.enemigos.forEach((item)=> console.log(item))
    }

    };

    //_________________________________________codigo_____________________________________________________________________________________


    // console.log(Object.values(gato))

    Object.values(gato).forEach((item) => console.log(item));
      // for in iterar un objeto

    //   for (let propiedad in gato){
    //     console.log(gato[propiedad])
    // };


// gato.comer()
// gato.comerDos("pez")
// gato.listarEnemigos()

const {nombre, duerme, edad} = gato;

console.log(nombre, duerme, edad)