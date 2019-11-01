import { connect } from "react-redux";
import { getListAdsRecommand } from "../actions/index";

import ProductsListInterest from "../component/ListProduct/ProductsListInterest"

const mapStateToProps = state => {
  return {
    recommand: state.recommandState
  };
};


const mapDispatchToProps = dispatch => {
  return {
    callAPIGetAdRecommand: () => {
      dispatch(getListAdsRecommand());
    }
  };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsListInterest);