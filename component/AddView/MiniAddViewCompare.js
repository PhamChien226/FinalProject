import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image,Dimensions } from "react-native";
import {withNavigation} from 'react-navigation'

let{width,height} = Dimensions.get('window');
export default class MiniAddViewCompare extends Component {
  onPress = () => {
    // const {item:{title}} = this.props;
    // console.log(onpress);
    alert(`You onPrres`)
    
    
  };
  render() {
    const {
      item: { price_str, subject },
      item,image
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
            source={image}
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
// export default withNavigation

const styles = StyleSheet.create({
  miniAddViewWrapper: {
    flex: 1,
    flexDirection: "column",
    // height: 137,
    width: 150,
    height:145,
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
    width: 150,
    height: 145,
    // backgroundColor: "green"
  },
  image: {
    height: 105 ,
    width: 140
  },
  infoAddviewWapper: {
  },
  textTitle: {
    height: 17,
    // width: 100,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#1F1F20",
    alignSelf:'center',
    textAlign:'center'
  },
  textPrice: {
    paddingHorizontal: 5,
    fontSize: 10,
    color: "brown",
    fontWeight:"800",
    alignSelf:'center'
  }
});
