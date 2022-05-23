const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg =  formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    
    const months = ['Enero','Febrero','Marzo','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','dic']
    const days = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
    
    let diaSemana = days[fecha.getDay()];
    let day = fecha.getDate()
    let mes =months[fecha.getMonth()]
    let fechaTexto = `${diaSemana}, ${day} ${mes}`;
    document.getElementById('fecha').innerHTML=fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
    
}


const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
        return hora;
    
}

setInterval(mostrarReloj, 1000);