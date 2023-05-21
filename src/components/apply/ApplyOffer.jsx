import { styled } from "styled-components"
import oferta from '../../resoult/specificOffer.json'
import { File } from "../../styles/Iconos"

//importar servicios
import { TiempoTranscurrido } from "../../services/CalcTime";
import { Test } from "./Test";

export function ApplyOffer (){
    const tiempo = TiempoTranscurrido(oferta.creationDate)
    return(
        <ApplyOfferCss>
            <section className="container contDes" >
                <span>Inscripción en:</span>
                <h1>{oferta.title}</h1>
                <form action="aplicar" method="post">
                    <fieldset>
                        <h2>CV adjunto (Opcional)</h2>
                        <div>
                            <input type="radio" name="opcion" value="opcion1" id="opcion1" />
                            <label htmlFor="opcion1">No incluir CV adjunto</label>
                        </div>
                        <div>
                            <input type="radio" name="opcion" value="opcion2" id="opcion2" />
                            <label htmlFor="opcion2">Incluir CV adjunto</label>
                        </div>
                        <div className="file-upload">
                            <label className="file-upload-label" htmlFor="pdf-file">
                                <i className="fas fa-upload"><File/></i>
                            </label>
                            <input className="input" type="file" id="pdf-file" name="pdf-file" accept="application/pdf"/>
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <h2>CV adjunto (Opcional)</h2>
                        <div>
                            <input type="radio" name="opcion" value="opcion3" id="opcion3" />
                            <label htmlFor="opcion3">No incluir CV adjunto</label>
                        </div>
                        <div>
                            <input type="radio" name="opcion" value="opcion4" id="opcion4" />
                            <label htmlFor="opcion4">Incluir CV adjunto</label>
                        </div>
                    </fieldset>
                    <div className="boton">
                        <button value="Enviar">
                            Confirma tu inscripción
                        </button>
                    </div> 
                </form>
            </section>
            <section className="container">   
                <h3>Datos de la oferta</h3>
                <ul>
                    <li>
                        <strong>Empresa</strong>
                        <p>{oferta.profile.name}</p>
                    </li>
                    <li>
                        <strong>Localización</strong>
                        <p>{oferta.city}, <span className='c1'>{oferta.profile.province.value}</span> ({oferta.profile.country.value})</p>
                    </li>
                    <li>
                        <strong>Salario</strong>
                        <p>{oferta.salaryDescription}</p>
                    </li>
                    <li>
                        <strong>Fecha de publicación</strong>
                        <p>{tiempo}</p>
                    </li>
                    <li>
                        <strong>Experiencia mínima</strong>
                        <p>{oferta.experienceMin.value}</p>
                    </li>
                    <li>
                        <strong>Tipo de contrato</strong>
                        <p>{oferta.contractType.value}, jornada {oferta.journey.value}</p>
                    </li>
                </ul>
            </section>
            <Test/>
        </ApplyOfferCss>
    )
}

export const ApplyOfferCss = styled.div`
    display: flex;
    gap: 1rem;
    .container{
        display: flex;
        flex-direction: column;
        color: var(--text1);
        background-color: var(--fondoComponents);
        padding: 1.6rem;
        font-size: 1.5rem;
        gap: 1.5rem;
        height: 100%;
        width: 100%;
    }
    .contDes{
        max-width: 64rem;
        flex-shrink: 0;
        gap: 3rem;
        h1{
            font-size: 3rem;
            font-weight: 500;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 3rem;
        } 
        fieldset{
            border: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .subir{
            display: flex;
            flex-direction: column;
        }
    }
    .boton{
        display: flex;
        justify-content: start;
        width: 100%;
        height: 100%;
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
    .file-upload{
        margin-top: 1rem;
        display: flex;
        justify-content: start;
        align-items: center;
        .file-upload-label{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            border-radius: .5rem;
            &:hover{
                background-color: var(--hoberButtons);
                cursor: pointer;
        }
        .file-upload {
            position: relative;
            overflow: hidden;
            display: inline-block;

        }

        
    }
    }
    .input{
        display: none;
    }

    ul{
        padding-left: 2rem;
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`