const personas = [
    new Persona('Juan', 'perez'),
    new Persona('Karla', 'lara')
]

function mostrarPersonas(){
    console.log('mostrar personas')
    let texto = '';
    for(let persona of personas){
        console.log(personas);
        texto += `<li class="border-b-2 border-gray-400 m-2">${persona.nombre} ${persona.apellido}</li>`
        document.getElementById('nombre').style.borderBottom = 'solid black 1px'
        document.getElementById('apellido').style.borderBottom = 'solid black 1px'
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.getElementById('forma');
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value !=''){
        const  persona = new Persona (nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('No hay informacion que agregar')
    }

}