import { connect } from "react-redux";
import { clickReadMore, clickReadLess,clickCategory } from "../actions/appAction";
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
    },

    onclickCategory: (listCategory)=> {
      dispatch(clickCategory(listCategory));
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
