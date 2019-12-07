// chứa các hàm các effect để dispatch các action   

import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_LIST_ITEM,
  POST_EVENT_CLICK,
  FETCH_LIST_ADS_RECOMMAND,
  FETCH_RECOMMAND_SUCCESS,
  FETCH_RECOMMAND_FAILED,
  FETCH_DETAIL_AD_FAILED,
  FETCH_DETAIL_AD_SUCCESS,
  FETCH_DETAIL_AD
} from "../actions/actionTypes";

import { put,takeLatest } from "redux-saga/effects";
import { Api } from "./API_Request";


function* fetchListAds(){  
    try {
        const receiveListAds = yield Api.getListAdsFromApi();
        yield put ({type: FETCH_SUCCEEDED, receivelist_ads: receiveListAds})
    } catch (error) {
        yield put ({type: FETCH_FAILED, list_ads:[]});
    }
}
function* postLogEvenCLick() {
    try {
        yield Api.postEventClick();
    } catch (error) {
     console.log(error);   
    }
}

function* fetchListAdsRecommand(){
    // console.log("fetchListAdsRecommand is clled")
    try {
        const receiveListAds = yield Api.fetchListAdsRecommand();
        yield put ({type: FETCH_RECOMMAND_SUCCESS, receivelist_ads: receiveListAds})
    } catch (error) {
        yield put ({type: FETCH_RECOMMAND_FAILED, receivelist_ads:[]});
    }
}

function* fetchDetailAd(){
    try {
        const detailAd = yield Api.getDetailAd();
        yield put ({type: FETCH_DETAIL_AD_SUCCESS, receive_ads: detailAd})
    } catch (error) {
        yield put ({type: FETCH_DETAIL_AD_FAILED, receive_ads: []})
    }
}

export function* watchFetchListAds() {
    yield takeLatest(FETCH_LIST_ITEM,fetchListAds);
}
export function* watchPostLogEventClick(){
    yield takeLatest(POST_EVENT_CLICK,postLogEvenCLick)
}

export function* watchFetchListAdsRecommand() {
    yield takeLatest(FETCH_LIST_ADS_RECOMMAND,fetchListAdsRecommand)
}

export function* watchFetchDetailAd() {
    yield takeLatest(FETCH_DETAIL_AD,fetchDetailAd)
}