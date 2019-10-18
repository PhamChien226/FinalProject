import {connect} from 'react-redux';
import {getAdItemToBeCompare} from '../actions/index'

import CompareScreen from '../screens/CompareScreen'

const mapStateToProps = (state) =>{
    return {
        adState: state.adState,
        compareState: state.compareState
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompareScreen);