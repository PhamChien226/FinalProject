import {connect} from 'react-redux';
import {getAdItemOwnCompare,getAdItemToBeCompare} from '../actions/index'

import InfoAddComponent from '../component/AddViewComponent/InfoAddComponent'

const mapStateToProps = (state) =>{
    return {
        compareState: state.compareState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItemOwnCompare : (item)=>{
            dispatch(getAdItemOwnCompare(item))
        },

        getAdItemToBeCompare : (item)=>{
            dispatch(getAdItemToBeCompare(item))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfoAddComponent);