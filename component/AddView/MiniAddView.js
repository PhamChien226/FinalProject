import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {withNavigation} from 'react-navigation'

class MiniAddView extends Component {
  onPress = () => {
    const {item:{title,adlist_id}} = this.props;
    // alert(`You onPrres : ${subject}`)
    this.props.navigation.navigate("Item", {
      adlist_id: adlist_id
    });
    
    
  };
  render() {
    const {
      item: { price_str, subject, image },
      item
    } = this.props;

    return (
      // <View style={styles.miniAddViewWrapper}>
        <TouchableOpacity
          // style={styles.miniAddViewWrapper}
          onPress={this.onPress}
          activeOpacity={0.9}
        >

        <View style={styles.miniAddViewWrapper}>
          <Image
            style={styles.image}
            // source={require("../../assets/laptop1.jpg")}
            source={require("../../assets/transparent_logo.png")}
            resizeMode="contain"
            />
          <View style={styles.infoAddviewWapper}>
            <Text style={styles.textTitle}>{subject}</Text>
            {/* <Text style={styles.textTitle}>Macbook Pro 13</Text> */}
            <Text style={styles.textPrice}>{price_str}</Text>
            {/* <Text style={styles.textPrice}>27.200.000 đ</Text> */}
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
    paddingTop: 20
  },
  textTitle: {
    height: 17,
    width: 100,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#1F1F20"
  },
  textPrice: {
    paddingHorizontal: 5,
    fontSize: 13,
    color: "#1F1F20",
    fontWeight:"200"
  }
});
