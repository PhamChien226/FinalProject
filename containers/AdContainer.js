import {connect} from 'react-redux';
import {clickAd,clickRefresh,getAdItemToBeCompare} from '../actions/index'

// import {ListItemScreen} from '../screens/index'
import ItemProduct from '../component/ItemProduct'

const mapStateToProps = (state) =>{
    return {
        adState: state.adState,
        compareState: state.compareState,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onClickAdd: (item) =>{
            dispatch(clickAd(item))
        },
        onRefresh: (id_main_category,page,id_category,id_area) =>{
            dispatch(clickRefresh(id_main_category,page,id_category,id_area))
        },
        getAdItemToBeCompare: async (adlist_id) =>{
            try {
                const response = await fetch(
                  `https://chotot-recommendersys.appspot.com/infor?adlist_id=${adlist_id}`,
                  {
                    method: "GET",
                    dataType: 'json',
                    headers: {
                      // Accept: "application/json",
                      "Content-Type": "application/json"
                    },
                  }
                );
                const dataJson = await response.json();
                dispatch(getAdItemToBeCompare(dataJson.infor))
              } catch (error) {}
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ItemProduct)
