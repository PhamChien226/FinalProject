import {
  FETCH_LIST_CATEGORY_SUCCESS,
  FETCH_LIST_CATEGORY_FAILED,
  READ_MORE,
  READ_LESS,
  CLICK_CATEGRORY
} from "../actions/actionTypes";
import dataCategory from '../utils/dataHome'
let dashBoardState = {
  listCategory: dataCategory,
  isReadMore: false
};

export const dashBoardReducer = (state = dashBoardState, action) => {
  switch (action.type) {
    case FETCH_LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategory: action.listCate
      };
    case FETCH_LIST_CATEGORY_FAILED:
      return {
        ...state,
        listCategory: []
      };
    case READ_MORE:
      return {
        ...state,
        isReadMore: true
      };
    case READ_LESS:
      return {
        ...state,
        isReadMore: false
      };
      case CLICK_CATEGRORY:
      return {
        ...state,
        listCategory: action.listCategory
      };
    default:
      return state;
  }
};
