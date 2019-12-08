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
import laptopImages from '../utils/images/laptopImages'

let { width, height } = Dimensions.get("window");

class IconKindBuyer extends Component {
  render() {
    if (this.props.kind == "pro") 
      return <MaterialIcons name="store" size={14} color="#ffab00" />;
    else return <FontAwesome name="user-circle-o" size={12} color="#ffab00" />;
  }
}

class ItemProduct extends Component {

  _getImage  = () => {
     const {item : {category_name}} = this.props;
    if(category_name == "Laptop"){
      let rand =   Math.floor(Math.random() * (laptopImages.length-1))
      let image =  laptopImages[rand];
      return image.images[0];
    }if(category_name == "Điện thoại"){
      let rand = Math.floor(Math.random() * (mobileImages.length-1))
      let item = mobileImages[rand];
      return item.thumbnail_image;
    }else{
      return "https://media.licdn.com/dms/image/C4D0BAQFIMX64Exzqdg/company-logo_200_200/0?e=2159024400&v=beta&t=hBmuvIWcA0jkkD-BeQWAiqwjc1shaM_vn6MKKBO_X8c"
    }

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
        adlist_id,
        thumbnail_img_url
      },nameTransparent 
    } = this.props;

    const image = this._getImage();
 
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.container]}
          onPress={async () => {
            if (nameTransparent === "ListItem") {
              item.thumbnail_img_url = image;
              await this.props.onClickAdd(item);
              await this.props.onPostLogEvent();
              await this.props.navigation.navigate("Item", {
                adlist_id: adlist_id,
                image: image
              });
            } else {
              await this.props.getAdItemToBeCompare(adlist_id,thumbnail_img_url);
              await this.props.navigation.navigate("DetailCompare",{
                image: image
              });
            }
          }}
          activeOpacity={0.9}
        >
          <View style={styles.wrapperImage}>
            <ImageBackground
              // source={{ uri: this._getImage() }}
              source={thumbnail_img_url ==null ? {uri:image} : {uri : thumbnail_img_url}}
              style={styles.image}
              resizeMode="cover"
              imageStyle={{ borderRadius: 9 }}
            />
          </View>
          <View style={styles.infoAdd}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textTitle}>{subject}</Text>
              <Octicons name="verified" size={15} color={"#03AE54"} style={{paddingTop: 3,}} />
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
    marginRight: 7,
    backgroundColor:"#c4c4c4",
    borderRadius:9
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
    paddingVertical: 5,
  },
  textTitle: {
    fontSize: 14,
    flex:0.98,
    // width: 205,
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
