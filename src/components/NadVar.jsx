import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { NadVarCss } from "../styles/NadVarCss";
import { Person } from "../styles/Iconos";


export function NadVar (){
    return(
        <NadVarCss> 
            <div className="contenedorNav">
                <div className='icono'>
                    <NavLink to='/' ><img className='logo' src="src/assets/img/image.svg" alt="Logo de info jobs" /></NavLink>
                </div>
                <nav className="nav">
                    <NavLink className='navlink'>Empleos</NavLink>
                    <NavLink className='navlink'>Mis ofertas</NavLink>
                    <NavLink className='navlink'>CV</NavLink>
                    <NavLink className='navlink'>Quien me ve</NavLink>
                </nav> 
            </div>
            <Person className="iconoPerson"/>
        </NadVarCss>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(NadVar)


