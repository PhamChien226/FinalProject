import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage
} from "react-native";
import { withNavigation } from "react-navigation";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";

let { width, height } = Dimensions.get("window");

class IconKindBuyer extends Component {
  render() {
    if (this.props.kind == "pro")
      return <MaterialIcons name="store" size={20} color="#ffab00" />;
    else return <FontAwesome name="user-circle-o" size={20} color="#ffab00" />;
  }
}

class ItemProduct extends Component {

  pushEventClick = async () => {
    const { id_category,id_main_category, page, id_area } = this.props.adState;
    const { item:{adlist_id},index } = this.props;

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
            "adlist_id": adlist_id,
            "ad_placement": null,
            "ad_position": index,
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
    console.log("Post Log ItemProduct ")
    console.log(respond);
  };

  render() {
    const {
      item,
      item: {
        
        area,
        price_str,
        publisher,
        subject,
        seller_type,
        create_elapse,
        adlist_id
      },nameTransparent 
    } = this.props;

    return (
      <View 
      style={styles.container}
      >
        <TouchableOpacity
          style={[styles.button]}
          onPress={async() => {
            if(nameTransparent === "ListItem")
            {
              this.props.onClickAdd(item)
              this.pushEventClick()
              this.props.navigation.navigate("Item", {
                adlist_id: adlist_id
              });
            }
            else {
              await this.props.getAdItemToBeCompare(adlist_id)
              await this.props.navigation.navigate("DetailCompare")
            }
          }}
          activeOpacity={0.9}
        >
          <Image
            style={styles.image}
            // source={{
            //   uri: image
            // }}
            source={require("../assets/transparent_logo.png")}
            resizeMode="contain"
          />
          <View style={styles.infoAdd}>
            <Text style={styles.textTitle}>{subject}</Text>
            <Text style={styles.textPrice}>{price_str} </Text>
            <View style={styles.infoExtraWrapper}>
              <View style={styles.infoExtra}>
                <IconKindBuyer style={styles.textExtra} kind={seller_type} />
                <Text style={styles.textExtra}> | {create_elapse}</Text>
                <Text style={[styles.textExtra, styles.textAddress]}>
                  {" "}
                  | {area}
                </Text>
              </View>
              <View style={styles.saveAdd}>
                <Entypo name="heart-outlined" size={20} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(ItemProduct);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
    width: width*0.97,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    // marginHorizontal: 2,
    borderBottomColor: "#c4c4c4",
    borderWidth: 1,
    borderColor: "white",
    alignSelf:'center'
  },
  button: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: 120,
    width: width*0.97,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 2,
    // width: "100%",
    // height: "100%"
  },
  image: {
    flex: 0.33,
    height: 110,
    backgroundColor: "#c4c4c4",
    borderRadius: 10,
    marginRight:7
  },
  infoAdd: {
    flex: 0.65,
    height: 110,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  infoExtraWrapper: {
    flexDirection: "row",
    width: 220,
    justifyContent: "space-between"
  },
  textTitle: {
    fontSize: 14,
    width: 220,
    fontWeight:'bold'
  },
  textPrice: {
    fontSize: 16,
    color: "brown",
    fontWeight: "500"
  },
  infoExtra: {
    flexDirection: "row",
    alignItems: "center",
    width: 150
  },
  textExtra: {
    color: "gray",
    fontWeight: "600",
    fontSize: 11
  },
  textAddress: {},
  saveAdd: {
    marginLeft: 10
  }
});
