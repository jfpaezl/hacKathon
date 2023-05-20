import { connect } from "react-redux";
import { styled } from "styled-components";

//importar hocks
import Layout from "../../hocks/layout/Layout";
import { OfferHero } from "../../components/offer/OfferHero";

//importa json con la info
import oferta from '../../resoult/specificOffer.json'
import { OfferMain } from "../../components/offer/OfferMain";


function Home (){
    return(
        <Layout>
            <HomeCss>
                <OfferHero oferta={oferta}/>
                <OfferMain/>
            </HomeCss>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Home)

export const HomeCss = styled.main`
    display: flex;
    flex-direction: column;
    width: 96rem;
    margin: 2rem auto;
    gap: 1rem;
    font-size: 1.3rem;
`