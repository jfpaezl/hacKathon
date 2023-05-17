import { connect } from "react-redux";
import { styled } from "styled-components";
import Layout from "../../hocks/layout/Layout";
import oferta from '../../resoult/specificOffer.json'

function Home (){
    return(
        <Layout>
            <HomeCss>
                <section>
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
                        <div className="contentDatos">
                            <ul>
                                <li>{oferta.country.value}, <span>{oferta.profile.province.value}</span> ({oferta.profile.country.value}) </li>
                            </ul>
                        </div>
                        <button >
                            INSCRIBIRME EN ESTA OFERTA
                        </button>
                    </div>                    
                </section>
            </HomeCss>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Home)

export const HomeCss = styled.main`
    margin: 0 7.6rem;
    max-width: 96rem;
    background-color: var(--fondoComponents);
    .header{
        padding: 2.4rem 1.6rem;
        display: flex;
        gap: 1.6rem;
        img{
            max-width: 8rem;
            border-radius: .5rem;
        }
        h2{
            font-size: 3rem;
            margin: 0;
            padding-top: 1rem;
            font-weight: 500;
        }
        span{
            color: var(--textEtiqueta);
            background-color: var(--fondoEtiqueta);
            font-size: 1.2rem;
            padding: 3px;
            border-radius: .3rem;
        }
        a{
            font-size: 1.6rem;
            color: var(--textButtons);
            text-decoration: none;
            :hover{
                text-decoration: underline;
            }
        }
    }
`