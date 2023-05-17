import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

export function NadVar (){
    return(
        <NadVarCss> 
            <div className="contenedorNav">
                <div className='icono'>
                    <NavLink to='/' ><img className='logo' src="src/assets/img/image.svg" alt="Logo de info jobs" /></NavLink>
                </div>
                <nav className="nav">
                    <NavLink activeClassName="active-link" className='navlink'>Empleos</NavLink>
                    <NavLink activeClassName="active-link" className='navlink'>Mis ofertas</NavLink>
                    <NavLink activeClassName="active-link" className='navlink'>CV</NavLink>
                    <NavLink activeClassName="active-link" className='navlink'>Quien me ve</NavLink>
                </nav> 
            </div>
        </NadVarCss>
    )
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(NadVar)

export const NadVarCss = styled.header`
    background-color: var(--fondoComponents);
    display: flex;
    align-items: center;

    .contenedorNav{
        display: flex;
        align-items: center;
        padding: 0 1.6rem;
    }
    .icono{
        display: flex;
        align-items: center;
        padding: 2.2rem 1.6rem;
        margin: 0 auto;
        max-height: 80px;
        max-width: 1280px;
        margin-left: 3.2rem;
    }

    .logo{
        width: 4rem;
        height: 4rem;
    }

    .nav{
        display: flex;
        font-size: 1.6rem;
        gap: .8rem;
        :hover{
            color: var(--fondoButtons);
        }
    }
    .navlink{
        text-decoration: none;
        color: var(--text2);
        padding: 0 .8rem;
    }

`