import { connect } from "react-redux";
import {
  clickAd,
  clickRefresh,
  getAdItemToBeCompare,
  postLogEventClick
} from "../actions/index";

// import {ListItemScreen} from '../screens/index'
import ItemProduct from "../component/ItemProduct";

const mapStateToProps = state => {
  return {
    adState: state.adState,
    compareState: state.compareState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: item => {
      dispatch(clickAd(item));
    },
    getAdItemToBeCompare: async (adlist_id,imageOfTobeItem) => {
      try {
        const response = await fetch(
          `https://chotot-recommendersys.appspot.com/infor?adlist_id=${adlist_id}`,
          {
            method: "GET",
            dataType: "json",
            headers: {
              // Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        );
        const dataJson = await response.json();
        await dispatch(getAdItemToBeCompare(dataJson.infor,imageOfTobeItem));
      } catch (error) {}
    },
    onPostLogEvent: () => {
      dispatch(postLogEventClick());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemProduct);
