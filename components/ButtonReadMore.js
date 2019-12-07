import React, { Component } from "react";
import {  StyleSheet, View,TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import Text from './CustomText'

export default function ButtonReadMore(props)  {
  // render() {
    return (
      <TouchableOpacity
        {...props}
        style={[props.style,styles.button]}
      >
       <View style ={styles.textWrapper}>
       <Text style={[props.style,styles.content]}>{props.contentText}</Text>
    <Text style={[props.style,styles.amount]}> ({props.amount})</Text>
       </View>
        <AntDesign
          name={props.nameIcon}
          size={12}
          color="#ffba00"
          style={[styles.icon,props.styleIcon]}
        />
      </TouchableOpacity>
    );
  // }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center" 
  },
  textWrapper: {
    flexDirection: "row"
  },
  content: {
    color: "#FFBA00",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16
  },
  amount: {
    color: "#FFBA00",
    alignSelf: "center",
    fontSize: 16
  },
  icon: {
    paddingTop: 6,
    paddingLeft: 3
  }
});
