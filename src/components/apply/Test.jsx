import React, { useState } from 'react';
import styled from "styled-components"
import Modal from '../Modal';
import testJS from '../../resoult/javaScriptTest.json'
import { getRandomItems } from '../../services/RandomList'

export function Test () {
    const lista = testJS.JavaScript
    const testJavaScript = getRandomItems(lista, 15)
    const [modalOpen, setModalOpen] = useState(true);

    // const openModal = () => {
    //   setModalOpen(true);
    // };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return(
        <TestCss>

            <Modal isOpen={modalOpen} onClose={closeModal}>
                <form id="formulario">
                        {
                            testJavaScript.map((question, index) =>(

                                <div className='containerQuestion' key={index}>
                                    <h3>{question.question}</h3>
                                    <div>
                                        <input type="radio" id={`opcion1_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion1"/>
                                        <label htmlFor={`opcion1_pregunta${question.id}`}>{question.options[0]}</label>
                                    </div>
                                    <div>
                                        <input type="radio" id={`opcion2_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion2"/>
                                        <label htmlFor="opcion2_pregunta1">{question.options[1]}</label>
                                    </div>
                                    <div>
                                        <input type="radio" id={`opcion3_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion3"/>
                                        <label htmlFor="opcion3_pregunta1">{question.options[2]}</label>
                                    </div>
                                    <div>
                                        <input type="radio" id={`opcion4_pregunta${question.id}`} name={`pregunta${question.id}`} value="opcion4"/>
                                        <label htmlFor="opcion3_pregunta1">{question.options[3]}</label>
                                    </div>
                                </div>
                            ))
                        }   
                    <input type="submit" value="Enviar"/>
                </form>
            </Modal>
        </TestCss>
    )
}

export const TestCss = styled.section`
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
`