import { connect } from "react-redux";
import { clickReadMore, clickReadLess } from "../actions/appAction";
import HomeScreen from "../screens/HomeScreen";

const mapStateToProps = state => {
  return {
    dashBoardState: state.dashBoardState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickReadMore: () => {
      dispatch(clickReadMore());
    },

    onClickReadLess: ()=> {
      dispatch(clickReadLess());
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
