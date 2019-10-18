import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { ItemProduct, Search } from "../component";
import { Entypo, AntDesign,Foundation } from "@expo/vector-icons";
import FilterComponent from "../component/FilterComponent/FilterComponent";
import FilterCategory from "../component/FilterComponent/FilterCategory";

import AdContainer from "../containers/AdContainer"

// let urlAPIDatabase =
//   "https://chotot-recommendersys.appspot.com/tech?page=0&category=laptop&city=ha-no-i&min_price=5000000&max_price=10000000&fbclid=IwAR2U1krLKBhxOLN5CbhpH-bpRdYtz-XtsFoLOGf4dOo7MpBRnoTSyMJge50";
// let urlAPIChoTot =
//   "https://gateway.chotot.com/v1/public/ad-listing?app_id=android&cg=5030&limit=20&o=0";

let id_main_category = "";
let{ width,height} = Dimensions.get('window')

export default class ListItemScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listitem: [],
      // price: 0,
      isLoading: false,
      page: 0,
      isLoadMore: false,
      isRefreshing: false,
      id_main_category: "5",
      id_category: null,
      id_area: null,
    };
  }

  componentDidMount = async () => {
    const { page,id_area,id_category} = this.state;
    id_main_category = await this.props.navigation.getParam("id_main_category");

    await this.setState({ isLoading: true });
    await this.callAPI(page, id_main_category, id_area, id_category);
    await this.pushEventClick();
  };
  callAPI = async (page, id_main_category, id_area, id_category) => {
    try {
      const { listitem } = this.state;
      const response = await fetch(
        `https://chotot-recommendersys.appspot.com/adlisting?main_category=${id_main_category}&category=${id_category}&page=${page}&area=${id_area}&region=13000`
      );
      const dataJson = await response.json();
      this.setState({
        isRefreshing: false,
        isLoading:false,
        page: page,
        listitem: listitem.concat(dataJson.list_ad_infor),
        id_main_category: id_main_category,
        id_category: id_category,
        id_area: id_area
      });
    } catch (error) {}
  };

  onEndReached = async () => {
    const { page, id_category,id_main_category,id_area } = this.state;
    await this.setState({ isLoading: true });
    const newpage = page + 1;
    this.props.onRefresh(newpage, id_main_category, id_area, id_category)
    this.callAPI(newpage, id_main_category, id_area, id_category);
  };
  pushEventClick = async () => {
    const { id_category,id_main_category, listitem, page, id_area } = this.state;
    const user_fingerprint = await AsyncStorage.getItem('@fingerprint')
    console.log(user_fingerprint)
    const respond = await fetch(
      "https://chotot-recommendersys.appspot.com/logging/create",
      {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "adlist_id": 1,
            "ad_placement": null,
            "ad_position": null,
            "ad_source": "stickyad",
            "user_fingerprint": user_fingerprint,
            "event_client_time": "2019-09-26T22:30:12",
            "event_server_time": "2019-09-26T22:31:00",
            "page_name": "ADLISTING",
            "page_number": page,
            "page_device": "HANDY",
            "filter_brand": null,
            "filter_main_category_id": id_main_category,
            "filter_category_id": id_category, 
            "filter_keyword": null,
            "filter_price": null,
            "filter_region_id": 13000,
            "filter_area_id": id_area,
            "filter_adtype": "sell"
          // adlist_id: 1, //gui list adlist_id
          // ad_placement: null, //bo qua
          // ad_position: null, //bo qua o screen nay
          // ad_source: "stickyad", //co ba cai, co the vao data xem
          // user_fingerprint: `redux`, //dung redux de update
          // event_client_time: "2019-09-26T22:30:12", //co the dung expo date lam (lam sau)
          // event_server_time: "2019-09-26T22:31:00", //chua biet
          // page_name: "ADLISTING", //co ai cai (o day la ADLISTING)
          // page_number: page, //lay page o trong state
          // page_device: "HANDY", //mac dinhluon
          // filter_brand: null, //null that
          // filter_main_category_id: id_category, //id_category
          // filter_category_id: listitem.category_name, //lap top hay dien thoai
          // filter_keyword: null, //tam thoi de khong
          // filter_price: null, //
          // filter_region_id: 13000, //fill theo quan.
          // filter_area_id: id_area, //filter theo quan
          // filter_adtype: "sell" //mac dinh la sell
        })
      }
    );
    // console.log("Post Log ")
    // console.log(respond);
  };

  pushEventLoad = async () => {
    const { id_category,id_main_category, listitem, page, id_area } = this.state;
    const user_fingerprint = await AsyncStorage.getItem('@fingerprint')
    const respond = await fetch(
      "https://chotot-recommendersys.appspot.com/logging/create",
      {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "adlist_id": 1,
            "ad_placement": null,
            "ad_position": null,
            "ad_source": "stickyad",
            "user_fingerprint": user_fingerprint,
            "event_client_time": "2019-09-26T22:30:12",
            "event_server_time": "2019-09-26T22:31:00",
            "page_name": "ADLISTING",
            "page_number": page,
            "page_device": "HANDY",
            "filter_brand": null,
            "filter_main_category_id": id_main_category,
            "filter_category_id": id_category, 
            "filter_keyword": null,
            "filter_price": null,
            "filter_region_id": 13000,
            "filter_area_id": id_area,
            "filter_adtype": "sell"
        })
      }
    );
  };
  

  onRefresh = async () => {
    const {id_main_category, id_area,id_category} = this.state;
    const newpage = 0;
    await this.setState({ isRefreshing: true, listitem: [], page: newpage,isLoading:true });
    this.props.onRefresh(newpage, id_main_category, id_area, id_category)
    await this.pushEventLoad();
    await this.callAPI(newpage, id_main_category, id_area, id_category);
  };
  renderFooter = () => {
    const { isRefreshing,isLoading} = this.state;
    if (isRefreshing == false)
      return <ActivityIndicator size="large" animating={isLoading} />;
  };
  refreshCategory = async (id_category,id_area) => {
    const {id_main_category} = this.state; 
    const newpage = 0;
    
    await this.setState({
      listitem: [],
      page: newpage,
      id_category: id_category,
      id_area:id_area,
      isLoading:true
    });
    this.props.onRefresh(newpage, id_main_category, id_area, id_category)
    await this.pushEventClick()
    await this.callAPI(newpage,id_main_category, id_area,id_category);
  };
  _renderHeader = () => {
    return <FilterCategory refreshCategory={this.refreshCategory} />;
  };
  

  render() {
    const { isRefreshing,id_category } = this.state;
    return (
      <View style={{ flex: 1 ,}}>
        <View style={styles.container} ref={"listItem"}>

          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.buttonGoback}
              onPress={() => this.props.navigation.goBack()}
            >
              <AntDesign name="left" size={27} color="black" />
            </TouchableOpacity>
            <Search textplace={"Đồ điện tử - Laptop"} width={width * 0.77} />
            <TouchableOpacity style={styles.iconBookmark}>
              <Foundation name="bookmark" size={27} color="black" />
            </TouchableOpacity>
          </View>

          <FilterComponent
            id_main_category={id_main_category}
            id_category={id_category}
            transparent={this}
          />

          <FlatList
            data={this.state.listitem}
            style={{backgroundColor:'white',paddingBottom:30}}
            ListHeaderComponent={this._renderHeader}
            renderItem={({ item, index }) => {
              return (
                <AdContainer
                  item={item}
                  index={index}
                  transparent={this}
                  //set la key nhe
                  key={index}
                  index={index}
                  nameTransparent={"ListItem"}
                ></AdContainer>
              );
            }}
            keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter()}
            onRefresh={this.onRefresh}
            refreshing={isRefreshing}
          ></FlatList>
        </View>
      </View>
    );
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    paddingBottom: 30,
  },
  headerContainer:{
    paddingTop: 30,
    flexDirection:'row',
    backgroundColor:'#ffba00',
    // justifyContent:'space-around',
    alignItems:'center',
  },
  buttonGoback:{
    paddingHorizontal:8
  },
  iconBookmark:{
    paddingHorizontal:14,
    // paddingRight:2
  }
});
