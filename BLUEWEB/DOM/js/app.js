
const h1 = document.getElementById("tituloDiego")
/*
console.log(h1.style);
console.log(h1.id);
console.log(h1.class);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = " nuevo Texto desde js escrito por Diego"
h1.style.backgroundColor = "red"
h1.style.color = "white"
*/

const button = document.querySelector(".btn-primary")
console.log(button)

button.addEventListener("click", () => {
    console.log("Me diste click")
    h1.textContent = "Texto de js"
    h1.style.color = "red"
})



// con foreach o for in
const lista = document.querySelector("#lista");
const arrayPaises = ["Peru", "Bolivia", "Colombia"]

// fracmentos

const fragment = document.createDocumentFragment()
// const fragment = new DocumentFragment()

for (pais in arrayPaises) {
        const li = document.createElement('li')
        li.textContent = arrayPaises[pais]
        fragment.appendChild(li)
} 

lista.appendChild(fragment)

// innerHTML genera reflow
// arrayPaises.forEach(pais=>{
//     lista.innerHTML += `<li>${pais}</li>`
// })










/*
console.log("🎈🎈🎈🎈🎈🎈");
console.log(document)
console.log(document.head)
console.log(document.title)


esta funcion se usa cuando el scrip en el html esta en el head y no al final del body
document.addEventListener("DOMContentLoaded", () => {

    console.log(document.getElementById("tituloDiego"))
console.log(document.getElementById("tituloDiego").textContent)
console.log(document.getElementById("tituloDiego").innerHTML)

})


console.log(document.getElementById("tituloDiego"))
// console.log(document.getElementById("tituloDiego").textContent)
// console.log(document.getElementById("tituloDiego").innerHTML)


console.log(document.querySelector("#tituloDiego"))
console.log(document.querySelector(".text-primary"))

console.log("Explicacion querySelector")
//  document.querySelector siempre va a tomar el primer elemento del DOM
console.log(document.querySelector(".container .text-danger"))
console.log(document.querySelectorAll(".container .text-danger"))
console.log(document.querySelectorAll(".text-danger"))

*/