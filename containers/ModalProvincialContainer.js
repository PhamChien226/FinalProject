import {connect} from 'react-redux';
import {clickFilterArea,fetchListItem} from "../actions/index";

import ModalProvincialScreen from '../screens/ModalProvincialScreen';


const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onClickFilterCategory: async (id_area)=>{
            await dispatch(clickFilterArea(id_area))
            await dispatch(fetchListItem())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalProvincialScreen);
