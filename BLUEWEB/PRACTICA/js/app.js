console.log("pactica")

const inputColor = document.querySelector("#inputColor")
const btnVisualizar = document.querySelector("#btnVisualizar")
const parrafoExa = document.querySelector("#parrafoExa")
const cardColor = document.querySelector("#cardColor")

inputColor.style.width = "100px"

// console.log(inputColor.value);

btnVisualizar.addEventListener("click",() => {
    console.log("medisteclick");
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});

