import { useTemporizador } from '../../hocks/useTemporizador'
import { styled } from 'styled-components'

export function Tempo (){
    const { horas, minutos, segundos } = useTemporizador(60*testJS.time)
    const claseTiempo = minutos < 3 ? 'temp temp2': 'temp'
    return(
        <TempoCss>
            <div className={claseTiempo}>
                <span>
                    {
                    horas != 0 ? `${horas}:${minutos}:${segundos}`:
                    minutos != 0 ? `${minutos}:${segundos}`: 
                    segundos
                    }
                </span>
            </div>
        </TempoCss>

    )
}

export const TempoCss = styled.div`
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
        border: solid 1px #960505;
    }
`