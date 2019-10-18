import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";

let { width, height } = Dimensions.get("window");
export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.topContainer}>
       <Image
          source={require("../assets/transparent_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* <Text style={styles.textWellcome}>Đáng tiền đáng mua ! </Text> */}
        <Text style={styles.textWellcome}>Muốn là Có ! </Text>
       </View>
        <Image
          source={require("../assets/image_wellcome.png")}
          style={styles.imageWellcome}
          resizeMode="contain"
        />
      </View>
    );
  }
}

WelcomeScreen.navigationOptions={
    header:null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#ffab00",
    paddingTop:30
  },
  topContainer:{
      flex:0.35,
      justifyContent:"center",
      alignContent: 'center',
  },
  logo: {
    width: 165,
    height: 60,
    marginBottom:20,
    alignSelf:'center'
    // justifyContent:"center",
    // alignItems:'center'
  },
  textWellcome: {
    textAlign:'center',
    // flex: 0.3,C
    fontWeight: "bold",
    fontSize: 20,
    color:'white'
  },
  imageWellcome: {
    flex: 0.6,
    width: width,
    marginBottom: height * 0.05,
    // height:
  }
});
