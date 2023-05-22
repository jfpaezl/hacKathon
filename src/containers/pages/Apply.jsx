import { connect } from "react-redux";
import { styled } from "styled-components";
import Layout from "../../hocks/layout/Layout";
import { ApplyOffer } from "../../components/apply/ApplyOffer";


function Apply (){
    return(
        <Layout>
            <ApplyCss>
                <ApplyOffer/>
            </ApplyCss>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Apply)

export const ApplyCss = styled.main`
    display: flex;
    flex-direction: column;
    width: 96rem;
    margin: 2rem auto;
    gap: 1rem;
    font-size: 1.3rem;
`