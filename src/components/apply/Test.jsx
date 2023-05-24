import React, { useState, useCallback } from 'react';
import testJS from '../../resoult/javaScriptTest.json'
import styled from "styled-components"
import Modal from '../Modal';
import { Form } from './Form';
import { Tempo } from './Tempo';

export function Test () {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState(null);
    const [punctuation, setPunctuation] = useState(0);
    let puntos = 0;

    for (const key in formData) {
        const id = parseInt(key); // Convierte la clave a un número entero
        
        // Busca el objeto en la lista de objetos con el id correspondiente
        const objetoEncontrado = testJS.JavaScript.find(obj => obj.id === id);
        
        if (objetoEncontrado && formData[key] === objetoEncontrado.answer) {
            puntos += 1
        } else {
            puntos 
        }
    }
    console.log(puntos)
    const calcR = (puntos) =>{
        setPunctuation((puntos*100)/15)
    }

    const handleChange = useCallback ((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
        calcR(puntos)
    };


    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return(
        <TestCss punctuation={punctuation}>
            <h2 className='h2'>Realiza los test para demostrar tus conocimientos al reclutador</h2>
            {
                punctuation ?
                 <div className='punctuation'>
                    <div className='encabezado'>
                        <p className='nameTest'>JavaScript</p>
                        <p>{puntos} de 15 Bien</p>
                    </div>
                    <div className='skilBar skilBar70'></div>
                 </div>
                : <button onClick={openModal} value='JavaScript'>JavaScript</button>
            }
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <form id="formulario" onSubmit={handleSubmit}>
                    <Tempo finish={handleSubmit}/>
                    <Form change={handleChange}/>
                    <input className='button' type="submit" value="Finalizar Prueba"/>
                </form>
            </Modal>
        </TestCss>
    )
}

export const TestCss = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .h2{
        font-size: 1.5rem;
        color: var(--textEtiqueta);
    }
    .punctuation{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .encabezado{
            display: flex;
            justify-content: space-around;
        }
        .skilBar,
        .skilBar::after{
            position: relative;
            max-width: 278px;
            width: 100%;
            height: .8rem;
            background-color: var(--text2);
            border-radius: 2rem;
            overflow: hidden;
        }
        .skilBar::after{
            content: '';
            position: absolute;
            left: -100%;
            background-color: var(--textButtons);
            transition: 800;
        }
        .skilBar70::after{
            transform: translateX(${props => props.punctuation}%);
        }
    }

    button{
        max-width: 23rem;
        height: 4rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        background-color: var(--fondoButtons);
        border-radius: .5rem;
        border: none;
        &:hover{
            cursor: pointer;
            background-color: var(--textButtons);
        }
    }
    .temp{
        position: absolute;
        left: 50%;
        top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
        color: var(--textEtiqueta);
        background-color: var(--hoberButtons);
        border: solid 1px var(--textEtiqueta);
        border-radius: .5rem;
    }
    .temp2{
        color: #960505;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .containerQuestion{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    h3{
        user-select: none;
        
    }
    input{
        cursor: pointer;
    }
    input:checked + label{
        color: var(--textButtons);
        font-weight: 600;
        border-bottom: solid 2px ;
    }
    label{
        user-select: none;
        border-radius: .5rem;
        &:hover{
            cursor: pointer;
        }
    }
    .button{
        display: block;
        background-color: var(--textButtons);
        border: none;
        width: fit-content;
        padding: 1rem;
        border-radius: .5rem;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        &:hover{
            cursor: pointer;
            background-color: var(--fondoButtons);
        }
    }
`