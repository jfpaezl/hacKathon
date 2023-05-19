import styled from "styled-components"
import oferta from '../../resoult/specificOffer.json'

export function OfferMain () {
    const iterarSpan = oferta.skillsList.map((item, index)=>{
        return <span key={index}>{item.skill}</span>
    })
    return(
        <OfferMainCss>
            <h3>Requisitos</h3>
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
            <div>
                <strong>Requisitos mínimos</strong>
                <p>{oferta.minRequirements}</p>
            </div>
           
        </OfferMainCss>
    )
}

export const OfferMainCss = styled.main`
    display: flex;
    max-width: 63.3rem;
    color: var(--text1);
    flex-direction: column;
    background-color: var(--fondoComponents);
    padding: 1.6rem;
    font-size: 1.5rem;
    gap: 1.5rem;

    h3{
        font-size: 2.5rem
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
                background-color: var(--fondoButtons);
            }
        }
        
    }

`