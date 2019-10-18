import {connect} from 'react-redux'
import {getAdItemToBeCompare} from '../actions/index'

import DetailCompareScreen from '../screens/DetailCompareScreen'

const mapStateToProps = (state) =>{
    return {
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
  )(DetailCompareScreen);