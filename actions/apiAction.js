import {
  FETCH_LIST_CATEGORY,
  FETCH_LIST_CATEGORY_SUCCESS,
  FETCH_LIST_CATEGORY_FAILED
} from "./actionTypes";

//Action Call API GET list Category
export const getListCategory = () => {
    return {
        type:FETCH_LIST_CATEGORY,

    }
    
};
export const fetchListCateSuccess = (listCate) => {
    return {
        type: FETCH_LIST_CATEGORY_SUCCESS,
        listCate
    }

};
export const fetchListCateFailed = () => {
    return {
        type : FETCH_LIST_CATEGORY_FAILED
    }
};
