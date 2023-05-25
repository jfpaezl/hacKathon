
import { Test } from "../../components/apply/Test";
import oferta from '../../resoult/specificOffer.json'
import { File } from "../../styles/Iconos"
import { ApplyOfferCss } from "../../styles/apply/ApplyOfferCss";

//importar servicios
import { TiempoTranscurrido } from "../../services/CalcTime";


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
                            <input type="radio" name="opcion" value="opcion2" id="opcion2" defaultChecked/>
                            <label htmlFor="opcion2">Incluir CV adjunto</label>
                        </div>
                        <div className="file-upload" id="otroDiv">
                            <label className="file-upload-label" htmlFor="pdf-file">
                                <i className="fas fa-upload"><File/></i>
                            </label>
                            <input className="input" type="file" id="pdf-file" name="pdf-file" accept="application/pdf"/>
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <h2>CV adjunto (Opcional)</h2>
                        <div>
                            <input type="radio" name="opcion2" value="opcion3" id="opcion3" defaultChecked/>
                            <label htmlFor="opcion3">No incluir carta</label>
                        </div>
                        <div>
                            <input type="radio" name="opcion2" value="opcion4" id="opcion4" />
                            <label htmlFor="opcion4">Crear una carta</label>
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
                <div>
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
                </div>   
                <Test/>
            </section>
        </ApplyOfferCss>
    )
}

