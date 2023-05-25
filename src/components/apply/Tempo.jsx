import { useTemporizador } from '../../hocks/useTemporizador'
import { TempoCss } from '../../styles/apply/TempoCss'
import testJS from '../../resoult/javaScriptTest.json';

export function Tempo ({finish}){
    const { horas, minutos, segundos } = useTemporizador(60*testJS.time)
    const claseTiempo = minutos < 3 ? 'temp temp2': 'temp'
    if (horas === '00' && minutos === '00' && segundos === '00'){
        finish()
    }

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

