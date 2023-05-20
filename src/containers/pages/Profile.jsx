import { connect } from "react-redux";
import Layout from "../../hocks/layout/Layout";
import { Test } from "../../components/offer/Test";

function Profile (){
    return(
        <Layout>
            <Test/>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Profile)