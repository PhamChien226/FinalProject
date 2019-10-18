import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {Search} from '../component'
import {MaterialCommunityIcons} from '@expo/vector-icons'   

export default class MessageScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let tabBarIcon = ({tintColor}) => {
      return (
        <MaterialCommunityIcons name="bell-ring-outline" size={26} color={tintColor}/>
      );
    };
    return {tabBarIcon };
  };
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <Text> Message Screen </Text>
      </View>
    );
  }
}
MessageScreen.navigationOptions = {
  header: null,
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignContent: "center",
    backgroundColor: "#ffab00"
  }
});
