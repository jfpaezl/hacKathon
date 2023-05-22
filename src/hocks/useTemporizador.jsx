import { useState, useEffect, useRef } from 'react';

export function useTemporizador(tiempoInicial) {
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const temporizadorRef = useRef(null);

  useEffect(() => {
    temporizadorRef.current = setInterval(() => {
      setTiempoRestante((prevTiempo) => prevTiempo - 1);
    }, 1000);

    return () => {
      clearInterval(temporizadorRef.current);
    };
  }, []);

  useEffect(() => {
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = tiempoRestante % 60;

    setHoras(horas < 10 ? `0${horas}` : horas);
    setMinutos(minutos < 10 ? `0${minutos}` : minutos);
    setSegundos(segundos < 10 ? `0${segundos}` : segundos);
  }, [tiempoRestante]);

  return { horas, minutos, segundos };
}