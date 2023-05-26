import { useState, useCallback } from 'react';
import testJS from '../resoult/javaScriptTest.json';
let points = 0;

export function calculatePunctuation(formData) {
  let puntos = 0;

  for (const key in formData) {
    const id = parseInt(key); // Convierte la clave a un número entero

    // Busca el objeto en la lista de objetos con el id correspondiente
    const objetoEncontrado = testJS.JavaScript.find(obj => obj.id === id);

    if (objetoEncontrado && formData[key] === objetoEncontrado.answer) {
      puntos += 1;
    }
  }

  return (puntos * 100) / 15, points = puntos;
}

export function handleChangeFormData(formData, setFormData) {
  return useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
}

export function TestService() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [punctuation, setPunctuation] = useState(0);

  const calcR = (puntos) => {
    setPunctuation((puntos * 100) / 15);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    const puntos = calculatePunctuation(formData);
    calcR(puntos);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = handleChangeFormData(formData, setFormData);

  return {
    points,
    modalOpen,
    formData,
    punctuation,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
    calcR,
  };
}
