import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions } from 'react-native'

let {height,width} = Dimensions.get('window')
export default class Slide extends Component {
    render() {
               return (
                 <View
                   style={{
                     height: 100,
                     backgroundColor: "#ffba00",
                     justifyContent: "center",
                     alignItems: "center",
                   }}
                 >
                   <Image
                     source={require("../assets/slide1.jpg")}
                     resizeMode="contain"
                     style={styles.image}
                   />
                 </View>
               );
             }
}

const styles = StyleSheet.create({
    image:{
        height:100,
        width: width * 0.9,
        borderRadius: 15,
    }
})
