import { connect } from "react-redux";
import { clickFilterCategory, fetchListItem, postLogEventClick } from "../actions/index";

import CategoryItem from "../component/FilterComponent/CategoryItem";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterCategory: async id_category => {
      await dispatch(clickFilterCategory(id_category));
      await dispatch(fetchListItem());
    },
    postLogEventClick: ()=> {
      dispatch(postLogEventClick());
    } 
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)
