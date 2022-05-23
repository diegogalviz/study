// variables
const action = document.querySelector('#action');
let ancla = document.getElementsByClassName('nav-enlace');

// logica
action.addEventListener("click", (e) => {
   for (let i = 0; i < ancla.length; i++) {
       ancla[i].classList.toggle("desaparece")
    }
});



