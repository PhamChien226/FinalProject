import { select, put, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../../actions/index";
import listAds from '../../utils/listAds'

export function* getListAdsFromApi() {
  const { page, id_main_category, id_category, id_area } = yield select(
    state => state.adState
  );
  yield put(showLoading());
  const response = yield fetch(
    `https://chotot-recommendersys.appspot.com/adlisting?main_category=${id_main_category}&category=${id_category}&min_price=null&page=${page}&region=13000&area=${id_area}`
  );
  const list_ads = yield response.json();
  delay(1000);
  yield put(hideLoading());
  return list_ads.list_ad_infor; 
  // return listAds.ads;
}


export function* postEventClick() {
  const { page, id_main_category, id_category, id_area } = yield select(
    state => state.adState
  );
  // console.log("PostEventClich is called")
  const {fingerprint} = yield select(state => state.authState)
  const response = yield fetch(
    "https://chotot-recommendersys.appspot.com/logging/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        adlist_id: 1,
        ad_placement: null,
        ad_position: null,
        ad_source: "stickyad",
        user_fingerprint: fingerprint,
        event_client_time: "2019-09-26T22:30:12",
        event_server_time: "2019-09-26T22:31:00",
        page_name: "ADLISTING",
        page_number: page,
        page_device: "HANDY",
        filter_brand: null,
        filter_main_category_id: id_main_category,
        filter_category_id: id_category,
        filter_keyword: null,
        filter_price: null,
        filter_region_id: 13000,
        filter_area_id: id_area,
        filter_adtype: "sell"
      })
    }
  ); 
  // console.log("Api post log");
  // console.log(response)
}



