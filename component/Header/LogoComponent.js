import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class LogoComponent extends Component {
    render() {
        return (
          <View style={styles.logoWapper}>
            <Image
              source={require("../../assets/transparent_logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    logoWapper:{
        height:40,
        backgroundColor:'#ffba00',
        justifyContent:'center',
        alignItems:'center'
      },
      logo:{
        position:"absolute",
        top:2,
        marginBottom:15,  
        height:32,
        width:100,
      }
})
