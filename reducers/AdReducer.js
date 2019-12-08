import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  CLICK_ADD,
  GET_LIST_ADS_WITH_NEW_CATEGORY,
  CLICK_FILTER_AREA,
  CLICK_FILTER_CATEGORY,
  
  SHOW_LOADING,
  HIDE_LOADING,
  GET_LIST_ADS_ON_END_READ,
  GET_LIST_ADS_ON_REFRESH
} from "../actions/actionTypes";
let adState = {
  list_ads: [],
  list_ad_interest: [],
  adlist_id_current:null,
  isLoading: false,
  page: 0,
  id_main_category: 5,
  id_area: null,
  id_category: 5010
};

export const adReducer = (state = adState, action) => {
  switch (action.type) {
    
    case FETCH_SUCCEEDED:
      return { 
        ...state,
        list_ads: state.list_ads.concat(action.receivelist_ads)
      };

    case FETCH_FAILED:
      return {
        list_ad: []
      };

    case CLICK_ADD:
      return {
        ...state,
        list_ad_interest: [...state.list_ad_interest, action.item],
        adlist_id_current: action.adlist_id
      };

    case CLICK_FILTER_AREA:
      return {
        ...state,
        list_ads: [],
        id_area: action.id_area,
        page:0
      };

    case CLICK_FILTER_CATEGORY:
      console.log("Click Filter Catrgory is called")
      return {
        ...state,
        list_ads: [],
        id_category: action.id_category,
        page:0
      };

    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false
      };

    case GET_LIST_ADS_ON_END_READ:
      return {
        ...state,
        page: state.page + 1
      };

    case GET_LIST_ADS_ON_REFRESH:
      return {
        ...state,
        list_ads: [],   
        page: 0,
      };

    default:
      return state;
  }
};
