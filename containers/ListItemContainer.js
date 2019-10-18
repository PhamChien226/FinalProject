import {connect} from 'react-redux';
import {clickRefresh} from '../actions/index'

import {ListItemScreen} from '../screens/index'

const mapStateToProps = (state) =>{
    return {
        adState: state.adState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onRefresh: (id_main_category,page,id_category,id_area) =>{
            dispatch(clickRefresh(id_main_category,page,id_category,id_area))
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListItemScreen)