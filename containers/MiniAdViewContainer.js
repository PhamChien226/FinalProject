import {connect} from 'react-redux';
import {clickAd} from '../actions/index';

import MiniAddView from '../component/AddView/MiniAddView';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdEvent: (item)=> {
            dispatch(clickAd(item));
        }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(MiniAddView);