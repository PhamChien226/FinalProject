import { connect } from "react-redux";
import { getListAdsRecommand } from "../actions/index";

import ListAdInterestScreen from "../screens/ListAdInterestScreen"

const mapStateToProps = state => {
  return {
    recommand: state.recommandState
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onFetchRecommand: () => {
      dispatch(getListAdsRecommand());
    }
  };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListAdInterestScreen);