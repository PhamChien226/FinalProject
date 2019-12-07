import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  AsyncStorage
} from "react-native";
import Text from '../components/CustomText';
import { withNavigation } from "react-navigation";
import { Entypo, MaterialIcons, FontAwesome,SimpleLineIcons,Octicons } from "@expo/vector-icons";
import mobileImages from '../utils/images/mobileImages'

let { width, height } = Dimensions.get("window");

class IconKindBuyer extends Component {
  render() {
    if (this.props.kind == "pro") 
      return <MaterialIcons name="store" size={19} color="#ffab00" />;
    else return <FontAwesome name="user-circle-o" size={14} color="#ffab00" />;
  }
}

class ItemProduct extends Component {

  _getImage  = () => {
    let rand = mobileImages[Math.floor(Math.random() * mobileImages.length)];
    return rand.images[0];
  }
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
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.container]}
          onPress={async () => {
            if (nameTransparent === "ListItem") {
              await this.props.onClickAdd(item);
              await this.props.onPostLogEvent();
              await this.props.navigation.navigate("Item", {
                adlist_id: adlist_id
              });
            } else {
              await this.props.getAdItemToBeCompare(adlist_id);
              await this.props.navigation.navigate("DetailCompare");
            }
          }}
          activeOpacity={0.9}
        >
          <View style={styles.wrapperImage}>
            <ImageBackground
              source={{ uri: this._getImage() }}
              style={styles.image}
              resizeMode="cover"
              imageStyle={{ borderRadius: 9 }}
            />
          </View>
          <View style={styles.infoAdd}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textTitle}>{subject}</Text>
              <Octicons name="verified" size={17} color={"#03AE54"} />
            </View>
            <Text style={styles.textPrice}>{price_str} </Text>
            <View style={styles.infoExtraWrapper}>
              <View style={styles.infoExtra}>
                <IconKindBuyer kind={seller_type} />
                <Text style={[styles.textExtra, styles.textAddress]}>
                  {"  "}
                  {area}
                  {"  "}
                </Text>
                <SimpleLineIcons name="note" size={8} color="#727C8E" />
                <Text style={styles.textExtra}> {create_elapse}</Text>
              </View>
              {/* <Entypo name="heart-outlined" size={20} color="red" style={styles.saveAdd} /> */}
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
    flex:1,
    flexDirection: "row",
    height: 100,
    width: width * 0.97,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  wrapperImage: {
    flex: 0.33,
    height: 90,
    backgroundColor: "#c4c4c4",
    marginRight: 7,
    borderRadius: 5
  },
  image: {
    width:'100%',
    height:'100%',
  },
  infoAdd: {
    flex: 0.65, 
    height: 110, 
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical: 5
  },
  textTitle: {
    fontSize: 14,
    width: 210,
    fontWeight: "bold"
    // fontWeight: "400"
  },
  textPrice: {
    fontSize: 15,
    color: "brown",
    // color: "black",
    fontWeight: "bold"  
  },
  infoExtraWrapper: {
    flexDirection: "row",
    width: 220,
    justifyContent: "space-between"
  },
  infoExtra: {
    flexDirection: "row",
    alignItems: "center",
    width: 150
  },
  textExtra: {
    color: "gray",
    // fontWeight: "600",
    fontSize: 10
  },
  textAddress: {},
  saveAdd: {
    marginLeft: 5,
    // marginRight:13

  }
});
