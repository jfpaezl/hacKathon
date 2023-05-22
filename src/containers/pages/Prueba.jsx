import { connect } from "react-redux";
import { styled } from "styled-components";
import Layout from "../../hocks/layout/Layout";
import { Test2 } from "../../components/apply/Test2";



function Prueba (){
         
    return(
        <Layout>
            <PruebaCss>
                <Test2/>
            </PruebaCss>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Prueba)

export const PruebaCss = styled.main`
    display: flex;
    flex-direction: column;
    width: 96rem;
    margin: 2rem auto;
    gap: 1rem;
    font-size: 1.3rem;

    .temp{
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
    }
`