import {
  FETCH_LIST_CATEGORY_SUCCESS,
  FETCH_LIST_CATEGORY_FAILED,
  READ_MORE,
  READ_LESS
} from "../actions/actionTypes";
let dashBoardState = {
  listCategory: [],
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
    default:
      return state;
  }
};
