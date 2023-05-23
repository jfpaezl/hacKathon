import React from 'react';
import testJS from '../../resoult/javaScriptTest.json'
import { getRandomItems } from '../../services/RandomList'

export const Form = React.memo(({change}) => {
    const lista = testJS.JavaScript;
    const testJavaScript = getRandomItems(lista, 15);


    return (
        <>
            {testJavaScript.map((question, index) => (
                <div className="containerQuestion" key={index}>
                    <h3>{question.question}</h3>
                    <div className="contentCheck">
                        <input
                            type="radio"
                            id={`opcion1_pregunta${question.id}`}
                            name={question.id}
                            value={question.options[0]}
                            onChange={change}
                        />
                        <label htmlFor={`opcion1_pregunta${question.id}`}>
                            {question.options[0]}
                        </label>
                    </div>
                    <div className="contentCheck">
                        <input
                            type="radio"
                            id={`opcion2_pregunta${question.id}`}
                            name={question.id}
                            value={question.options[1]}
                            onChange={change}
                        />
                        <label htmlFor={`opcion2_pregunta${question.id}`}>
                            {question.options[1]}
                        </label>
                    </div>
                    <div className="contentCheck">
                        <input
                            type="radio"
                            id={`opcion3_pregunta${question.id}`}
                            name={question.id}
                            value={question.options[2]}
                            onChange={change}
                        />
                        <label htmlFor={`opcion3_pregunta${question.id}`}>
                            {question.options[2]}
                        </label>
                    </div>
                    <div className="contentCheck">
                        <input
                            type="radio"
                            id={`opcion4_pregunta${question.id}`}
                            name={question.id}
                            value={question.options[3]}
                            onChange={change}
                        />
                        <label htmlFor={`opcion4_pregunta${question.id}`}>
                            {question.options[3]}
                        </label>
                    </div>
                </div>
            ))}
        </>
    );
});