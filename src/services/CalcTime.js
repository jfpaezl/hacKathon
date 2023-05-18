export function TiempoTranscurrido(fechaHoraString){
    
    const fechaHora = new Date(fechaHoraString); // Convertir la cadena a objeto Date
    const fechaHoraActual = new Date(); // Obtener la fecha y hora actual
    
    const tiempoTranscurrido = fechaHoraActual - fechaHora; // Diferencia de tiempo en milisegundos
    
    // Calcular los componentes de tiempo
    const segundosTranscurridos = Math.floor(tiempoTranscurrido / 1000);
    const minutosTranscurridos = Math.floor(segundosTranscurridos / 60);
    const horasTranscurridas = Math.floor(minutosTranscurridos / 60);
    const diasTranscurridos = Math.floor(horasTranscurridas / 24);
    const mesesTranscurridos = Math.floor(diasTranscurridos / 30);
    
    if (mesesTranscurridos >= 1) {
        return mesesTranscurridos + (mesesTranscurridos === 1 ? ' mes' : ' meses');
    } else if (diasTranscurridos >= 1) {
        return diasTranscurridos + (diasTranscurridos === 1 ? ' día' : ' días');
    } else if (horasTranscurridas >= 1) {
        return horasTranscurridas + (horasTranscurridas === 1 ? ' hora' : ' horas');
    } else {
        return minutosTranscurridos + (minutosTranscurridos === 1 ? ' minuto' : ' minutos');
    }
    
}