
document.getElementById('sumar').addEventListener("click", (evento) =>{
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "La operacion no incluye numeros"
    document.getElementById('resultado').innerHTML= `el resultado es: ${resultado}`;
})
