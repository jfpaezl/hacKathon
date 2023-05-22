import styled from "styled-components"
import { Link } from 'react-router-dom';
import oferta from '../../resoult/specificOffer.json'
import { Facebook, Linkedin, Twitter } from "../../styles/Iconos"

export function OfferMain () {
    return(
        <OfferMainCss>
            <section className="container contDes">
                <h2>Requisitos</h2>
                <div>
                    <strong>Estudio minimo</strong>
                    <p>{oferta.studiesMin.value}</p>
                </div>
                <div>
                    <strong>Experiencia mínima</strong>
                    <p>{oferta.experienceMin.value}</p>
                </div>
                <div>
                    <strong>Conocimientos necesarios</strong>
                    <div className="spans">
                        {
                            oferta.skillsList.map((item, index)=>{
                                return <span key={index}>{item.skill}</span>
                            })
                        }
                    </div>               
                </div>
                <div  className="parrafo">
                    <strong>Requisitos mínimos</strong>
                    <p>{oferta.minRequirements}</p>
                </div>
                <div  className="parrafo">
                    <h2>Descripción</h2>
                    <p>{oferta.description}</p>
                </div>
                <div>
                    <strong>Referencia</strong>
                    <p>{oferta.referenceId}</p>
                </div>
                <div>
                    <strong>Tipo de industria de la oferta</strong>
                    <p>{oferta.profile.typeIndustry.value}</p>
                </div>
                <div>
                    <strong>Nivel</strong>
                    <p>{oferta.jobLevel.value}</p>
                </div>
                <div>
                    <strong>Número de vacantes</strong>
                    <p>{oferta.vacancies}</p>
                </div>
                <div>
                    <strong>Salario</strong>
                    <p>{oferta.salaryDescription}</p>
                </div>
                <div>
                    <strong>Beneficios sociales</strong>
                    <p>Flexibilidad horaria</p>
                    <p>Teletrabajo</p>
                    <p>Seguro médico</p>
                </div>
                <p>Nuestro consejo: inscríbete si tienes el perfil, puede que se ajuste más que el de otros inscritos.</p>
                <strong className="info">Realiza la prueba técnica, puede que te ayude a demostrar tus conocimientos</strong>
                <div className="boton">
                    <button >
                        <Link className='link' to='/aplicar'>INSCRIBIRME EN ESTA OFERTA</Link> 
                    </button>
                </div> 
            </section>
            <div className="container social">
                <h3>Comparte esta oferta</h3>
                <div className="logos">
                    <div className="contendIcon">
                        <Facebook/>
                    </div>
                    <div className="contendIcon">
                        <Twitter/>
                    </div>
                    <div className="contendIcon">
                        <Linkedin/>
                    </div>                   
                </div>
                <a href="#">Imprime esta oferta</a> 
            </div>
            
        </OfferMainCss>
    )
}

export const OfferMainCss = styled.main`
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
    }
    h2{
        font-size: 2.5rem;
        margin-bottom: 1.6rem;
    }
    h3{
        white-space: nowrap;
    }
    .spans{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        span{
            background-color: var(--hoberButtons);
            padding: .5rem;
            border-radius: 1rem;
            &:hover{
                cursor: pointer;
                color: var(--fondoComponents);
                background-color: var(--fondoButtons);
            }
        }
        
    }
    p{
        white-space: pre-line;
        line-height: 1.5;
    }
    .parrafo{
        padding: 2rem 0;
        border-bottom: 1px solid var(--text2);
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
        background-color: var(--colorButton);
        border-radius: .5rem;
        border: none;
        &:hover{
            cursor: pointer;
            background-color: var(--colorButtonHover);
        }
    }
    .info{
        font-size: 1.7rem;
        color: var(--textEtiqueta);
    }
    .social{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.6rem 3.2rem;
        gap: 1.5rem;
    }
    .logos{
        display: flex;
        gap: 1rem;

    }
    .contendIcon{
        padding: .8rem;
        &:hover{
            cursor: pointer;
            background-color: var(--fondoMain);
            border-radius: .5rem;
        }
    }
    .link{
        text-decoration: none;
        color: #ffffff;
    }
`