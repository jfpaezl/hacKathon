import React, { useState } from 'react';
import styled from "styled-components"
import Modal from '../Modal';
import testJS from '../../resoult/javaScriptTest.json'
import { getRandomItems } from '../../services/RandomList'
import { useTemporizador } from '../../hocks/useTemporizador'

export function Test () {
    const lista = testJS.JavaScript
    const { horas, minutos, segundos } = useTemporizador(60*testJS.time)
    const claseTiempo = minutos < 3 ? 'temp temp2': 'temp'
    const testJavaScript = getRandomItems(lista, 15)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return(
        <TestCss>
            <h2 className='h2'>Realiza los test para demostrar tus conocimientos al reclutador</h2>
            <button onClick={openModal} value='JavaScript'>JavaScript</button>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <form id="formulario">
                    <div className={claseTiempo}>
                        <span>
                            {
                            horas != 0 ? `${horas}:${minutos}:${segundos}`:
                            minutos != 0 ? `${minutos}:${segundos}`: 
                            segundos
                            }
                        </span>
                    </div>
                        {
                            testJavaScript.map((question, index) =>(

                                <div className='containerQuestion' key={index}>
                                    <h3>{question.question}</h3>
                                    <div className='contentCheck'>
                                        <input type="radio" id={`opcion1_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion1"/>
                                        <label htmlFor={`opcion1_pregunta${question.id}`}>{question.options[0]}</label>
                                    </div>
                                    <div className='contentCheck'>
                                        <input type="radio" id={`opcion2_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion2"/>
                                        <label htmlFor={`opcion2_pregunta${question.id}`}>{question.options[1]}</label>
                                    </div>
                                    <div className='contentCheck'>
                                        <input type="radio" id={`opcion3_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion3"/>
                                        <label htmlFor={`opcion3_pregunta${question.id}`}>{question.options[2]}</label>
                                    </div>
                                    <div className='contentCheck'>
                                        <input type="radio" id={`opcion4_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion4"/>
                                        <label htmlFor={`opcion4_pregunta${question.id}`}>{question.options[3]}</label>
                                    </div>
                                </div>
                            ))
                        }   
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