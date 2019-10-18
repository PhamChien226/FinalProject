import {FETCH_SUCCEEDED,FETCH_FAILED,CLICK_ADD,CLICK_REFRESH} from '../actions/actionTypes';
let adState={
    list_ad:[],
    page:0,
    id_main_category:null,
    id_area:null,
    id_category:null,
    list_ad_interest:[] 
}

export  const adReducer = (state=adState,action) =>{
     switch (action.type) {
         case FETCH_SUCCEEDED:
             return {
               ...state,
               page:action.page,
               id_main_category:action.id_main_category,
               id_area:action.id_area,
               id_category:action.id_category,
               list_ad: action.list_ads,
             };
        case CLICK_ADD :
            return {
                ...state,
                list_ad_interest: [...state.list_ad_interest,action.item]
            }
        case CLICK_REFRESH :
            return {
                ...state,
                page:action.page,
                id_main_category:action.id_main_category,
                id_area:action.id_area,
                id_category:action.id_category
            }
         default:
             return state;
     }
}

