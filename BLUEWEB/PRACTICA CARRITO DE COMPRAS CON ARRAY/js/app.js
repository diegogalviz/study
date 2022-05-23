const shoppingCart = document.getElementById('shoppingCart');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll("button")

// CREACION DE UN OBJETO
const carObject = []
// METODO AGREGAR AL CARRITO
const addCar = (e) => {
    // e.target.dataset;
    // SE CREA UN OBJETO CON LOS DATOS OBTENIDOS
    const Product = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };
    //SE COMPRUEBA SI EL ID ESTA EN EL ARRAY ARROJA -1 PARA NO Y 0 PARA SI
    const indice = carObject.findIndex(
        (item)=> item.id === Product.id
    )

    /*
    SE PREGUNTA SI EL PRODUCTO EXISTE EN EL ARRAY, SI NO EXISTE LO
    INGRESA EN EL ARRAY Y SI EXISTE SOLO  SOLO LE AUMENTA LA CATIDAD
    */
    if (indice === -1){
        carObject.push(Product)
    }else{
        carObject[indice].cantidad++;
    }

    // SE LLAMA LA FUNCION PARA MOSTRAR EL PRODUCTO CREADO EN EL DOM
    paintCar(carObject)

}

// CAPTURO EL EVENTO CLICK DE TODOS LOS BOTONES, CADA QUE LE DE CLICK EJECUTO LA FUNCION ADDCAR
buttons.forEach((button) => button.addEventListener("click", addCar));

// INGRESO EL PRODUCTO AL DOM RECORRIENDO UN ARRAY
const paintCar = (array) => {
    // CREO UNA CADENA VACIA PARA GUARDAR DENTRO DEL ID LO QUE VOY A CREAR
    shoppingCart.textContent = '';
    // RECORRO EL ARRAY DE LOS PRODUCTO QUE SE LO PASO ARRIBA EN LA FUNCION ADD CAR ALLA LA LLAMO
    array.forEach(item => {
        // CREO UN CLONE PARA NO GENERAR REFLOW
        const clone = template.content.cloneNode(true)
        // EN CADA APARTADO LE COLOCO SI VALOR ESTRAYENDOSELO AL CONTENIDO DEL PRODUCTO
        clone.querySelector('#description').textContent = item.titulo;
        clone.querySelector('#count').textContent = item.cantidad;
        /*
        UTILIZO EL FRAGMENT PARA GUARDAR TODO LO QUE HAGA EN EL CLONE 
        OSEA TODO SE HACE INTERNO Y NO SE GENERA REFLOW
        */
        
        fragment.appendChild(clone);
         
    })

    // LE EMPUJO LO HECHO A LA SECCION DONDE VA A IR EN EL DOM
    shoppingCart.appendChild(fragment)
}

// buttons.forEach((btn) => {
//     btn.addEventListener("click", addCar)
// })
