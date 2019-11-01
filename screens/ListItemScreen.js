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
import { Entypo, AntDesign, Foundation } from "@expo/vector-icons";
import FilterComponent from "../component/FilterComponent/FilterComponent";
import FilterCategory from "../component/FilterComponent/FilterCategory";

import AdContainer from "../containers/AdContainer";
import dataItem from "../utils/dataItem";

let { width, height } = Dimensions.get("window");
export default class ListItemScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false
    };
  }

  componentDidMount = async () => {
    await this.props.onFetchListItem();
  };

  onEndReached = () => {
    this.props.onEndRead();
    this.props.postLogEvenClick();
  };

  onRefreshing =  () => {
     this.props.onRefresh();
    this.props.postLogEvenClick();
  };

  renderFooter = () => {
    const { isRefreshing } = this.state;
    if (!isRefreshing)
      return <ActivityIndicator size="large" animating={true} />;
  };
  _renderHeader = () => {
    return <FilterCategory />;
  };

  render() {
    const { list_ads } = this.props.adState; 
    return (
      <View style={{ flex: 1 }}>
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

          <FilterComponent />

          <FlatList
            data={list_ads}
            style={{ backgroundColor: "white", marginBottom: 105 }}
            ListHeaderComponent={this._renderHeader}
            renderItem={({ item, index }) => {
              return (
                <AdContainer
                  index={index}
                  transparent={this}
                  item={item}
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
            onRefresh={this.onRefreshing}
            refreshing={false}
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
    backgroundColor: "white",
    paddingBottom: 30
  },
  headerContainer: {
    paddingTop: 30,
    flexDirection: "row",
    backgroundColor: "#ffba00",
    alignItems: "center"
  },
  buttonGoback: {
    paddingHorizontal: 8
  },
  iconBookmark: {
    paddingHorizontal: 14
  }
});
 // adlist_id: 1, //gui list adlist_id
  //         // ad_placement: null, //bo qua
  //         // ad_position: null, //bo qua o screen nay
  //         // ad_source: "stickyad", //co ba cai, co the vao data xem
  //         // user_fingerprint: `redux`, //dung redux de update
  //         // event_client_time: "2019-09-26T22:30:12", //co the dung expo date lam (lam sau)
  //         // event_server_time: "2019-09-26T22:31:00", //chua biet
  //         // page_name: "ADLISTING", //co ai cai (o day la ADLISTING)
  //         // page_number: page, //lay page o trong state
  //         // page_device: "HANDY", //mac dinhluon
  //         // filter_brand: null, //null that
  //         // filter_main_category_id: id_category, //id_category
  //         // filter_category_id: listitem.category_name, //lap top hay dien thoai
  //         // filter_keyword: null, //tam thoi de khong
  //         // filter_price: null, //
  //         // filter_region_id: 13000, //fill theo quan.
  //         // filter_area_id: id_area, //filter theo quan
  //         // filter_adtype: "sell" //mac dinh la sell
