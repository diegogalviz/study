const shoppingCart = document.getElementById('shoppingCart');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll("button")

// CREACION DE UN OBJETO
const carObject = {}

// METODO AGREGAR AL CARRITO
const addCar = (e) => {
    // e.target.dataset;
    
    // SE CREA UN OBJETO CON LOS DATOS OBTENIDOS
    const Product = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    if(carObject.hasOwnProperty(Product.id)){
        Product.cantidad = carObject[Product.id].cantidad + 1; 
    }
    
    carObject[Product.id] = Product
    paintCar()
    // console.log(carObject)
}
buttons.forEach((button) => button.addEventListener("click", addCar));

const paintCar = (product) => {
    shoppingCart.textContent = '';
    Object.values(carObject).forEach(item => {
        const clone = template.content.cloneNode(true)
        clone.querySelector('#description').textContent = item.titulo;
        clone.querySelector('#count').textContent = item.cantidad;

        fragment.appendChild(clone);
    })

    shoppingCart.appendChild(fragment)
}

// buttons.forEach((btn) => {
//     btn.addEventListener("click", addCar)
// })
