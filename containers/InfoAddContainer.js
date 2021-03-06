import {connect} from 'react-redux';
import {getAdItemOwnCompare,getAdItemToBeCompare} from '../actions/index'

import InfoAddComponent from '../component/AddViewComponent/InfoAddComponent'

const mapStateToProps = (state) =>{
    return {
        compareState: state.compareState,
        adViewState: state.adViewState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItemOwnCompare: (item,imageOfOldItem)=>{
            dispatch(getAdItemOwnCompare(item,imageOfOldItem))
        },

        // getAdItemToBeCompare: (item,imageOfToBeItem)=>{
        //     dispatch(getAdItemToBeCompare(item,imageOfToBeItem))
        // }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfoAddComponent);