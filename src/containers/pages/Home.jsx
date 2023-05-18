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
    margin: 2rem 7.6rem;
    max-width: 96rem;
    gap: 1rem;
    font-size: 1.3rem;
`