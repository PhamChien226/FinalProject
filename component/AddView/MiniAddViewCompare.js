import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, ImageBackground,Dimensions } from "react-native";
import {withNavigation} from 'react-navigation';
import Text from '../../components/CustomText';

let{width,height} = Dimensions.get('window');
export default class MiniAddViewCompare extends Component {
  onPress = () => {
    alert(`You onPrres`)
    
    
  };
  render() {
    const {
      item: { price_str, subject },
      item,image
    } = this.props;

    return (
        <TouchableOpacity
          onPress={this.onPress}
          activeOpacity={0.9}
          
        >

        <View style={styles.miniAddViewWrapper}>
          <ImageBackground
            style={styles.image}
            // source={image}
            source={{uri : image}}
            resizeMode="stretch"
            imageStyle={{ borderRadius: 10 }}
            />
          <View style={styles.infoAddviewWapper}>
            <Text style={styles.textTitle}>{subject}</Text>
            <Text style={styles.textPrice}>{price_str}</Text>
          </View>
        </View>
            </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  miniAddViewWrapper: {
    flex: 1,
    flexDirection: "column",
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
  image: {
    height: 105 ,
    width: 140,
    // borderRadius:5
  },
  infoAddviewWapper: {
  },
  textTitle: {
    height: 17,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#1F1F20",
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
