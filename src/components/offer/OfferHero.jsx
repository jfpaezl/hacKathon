//importar estilos
import { OfferHeroCss } from '../../styles/offer/OfferHeroCss'
import { Link } from 'react-router-dom';

//importar servicios
import { TiempoTranscurrido } from "../../services/CalcTime";


export function OfferHero ({oferta}) {
    const tiempo = TiempoTranscurrido(oferta.creationDate)
    return(
        <OfferHeroCss className="hero">
            <header className="header">
                <div>
                    <img src={oferta.profile.logoUrl} alt="imagen de prueba" />
                </div>
                <div>
                    <span>Proceso online</span>
                    <h2>{oferta.title}</h2>
                    <a href={oferta.profile.web}>{oferta.profile.name}</a>
                </div>
            </header>
            <div className="datos">
                <ul>
                    <li>{oferta.city}, <span className='c1'>{oferta.profile.province.value}</span> ({oferta.profile.country.value}) </li>
                    <li>Solo teletrabajo</li>
                    <li>Publicada <span className='c2'>hace {tiempo}</span> </li>
                    <li>Salario: {oferta.salaryDescription}</li>
                </ul>
                <ul>
                    <li>Experiencia mínima: {oferta.experienceMin.value}</li>
                    <li>Tipo de contrato: {oferta.contractType.value}, jornada {oferta.journey.value}</li>
                </ul>
                <div className="boton">
                    <button >
                        <Link className='link' to='/aplicar'>INSCRIBIRME EN ESTA OFERTA</Link> 
                    </button>
                </div> 
            </div>                    
        </OfferHeroCss>
    )
}

