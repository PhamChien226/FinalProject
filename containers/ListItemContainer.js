import {connect} from 'react-redux';
import {
  fetchSuccessAcion,
  fetchListItem,
  getListAdsOnEndRead,
  getListAdsOnRefresh,
  postLogEventClick
} from "../actions/index";

import {ListItemScreen} from '../screens/index'

const mapStateToProps = (state) =>{
    return {
        adState: state.adState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onFetchListItem: () =>{
            dispatch(fetchListItem())
        },

        onEndRead: async () => {
            await dispatch(getListAdsOnEndRead())
            await dispatch(fetchListItem())
        },

        onRefresh: async () => {
            await dispatch(getListAdsOnRefresh())
            await dispatch(fetchListItem())
        },

        postLogEvenClick: () => {
            dispatch(postLogEventClick())
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListItemScreen)