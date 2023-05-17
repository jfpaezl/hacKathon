import { connect } from "react-redux";
import NadVar from "../../components/NadVar";


function Layout({children}) {
    return(
        <>
            <NadVar/>
            {children}
        </>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

})(Layout)