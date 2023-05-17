import { connect } from "react-redux";
import Layout from "../../hocks/layout/Layout";

function Profile (){
    return(
        <Layout>
            <h1>perfil</h1>
        </Layout>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Profile)