// rootSaga => to manage other sagas

//Saga effects
/*
call là gọi nhiều saga cùng một lúc     
*/
import { call, all, fork, takeLatest } from "redux-saga/effects";

import {
  watchFetchListAds,
  watchPostLogEventClick,
  watchFetchListAdsRecommand,
  watchFetchDetailAd
} from "./ListAdsSagas";

export default function* rootSaga() {
  yield fork(watchFetchListAds);
  yield fork(watchPostLogEventClick);
  yield fork(watchFetchListAdsRecommand);
  yield fork(watchFetchDetailAd);
  // yield all([
  //     watchFetchListAds,
  //     watchPostLogEventClick
  // ]);
}
