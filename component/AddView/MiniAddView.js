import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {withNavigation} from 'react-navigation';
import Text from '../../components/CustomText';

class MiniAddView extends Component {
  onPress = async () => {
    const {item:{title,adlist_id,thumbnail_img_url},item} = this.props;
    // await this.props.onClickAdd(item);
    await this.props.onClickAdEvent(item);
    await this.props.navigation.navigate("Item", {
      adlist_id: adlist_id,
      image: thumbnail_img_url
    });
    
  };
  render() {
    const {
      item: { price_str, subject, thumbnail_img_url },
      item
    } = this.props;

    return (
        <TouchableOpacity
          onPress={this.onPress}
          activeOpacity={0.9}
        >

        <View style={styles.miniAddViewWrapper}>
          <Image
            style={styles.image}
            // source={require("../../assets/transparent_logo.png")}
            source={{uri : thumbnail_img_url}}
            resizeMode="stretch"
            />
          <View style={styles.infoAddviewWapper}>
            <Text style={styles.textTitle}>{subject}</Text>
            <Text style={styles.textPrice}>{price_str}</Text>
          </View>
        </View>
            </TouchableOpacity>
      // </View>
    );
  }
}
export default withNavigation(MiniAddView)

const styles = StyleSheet.create({
  miniAddViewWrapper: {
    flex: 1,
    flexDirection: "column",
    height: 137,
    width: 110,
    margin: 7,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
    height: 100,
    backgroundColor: "green"
  },
  image: {
    height: 70,
    width: 100,
    backgroundColor:'#c4c4c4'
  },
  infoAddviewWapper: {
    paddingTop: 20,
    justifyContent:'center',
    alignItems:"center"
  },
  textTitle: {
    height: 17,
    width: 100,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#1F1F20",
    textAlign:"center"
  },
  textPrice: {
    paddingHorizontal: 5,
    fontSize: 10,
    color: "brown",
    fontWeight:"bold"
  }
});
