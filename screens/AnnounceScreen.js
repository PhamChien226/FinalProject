import React, { Component } from "react";
import {  StyleSheet, View, Image } from "react-native";
import Text from '../components/CustomText';
import { Search } from "../component";
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

export default class AnnounceScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = "Thông Báo";
    let tabBarIcon = ({tintColor}) => {
      return (
        // <MaterialCommunityIcons name="bell-ring-outline" size={26} color={tintColor}/>
        <MaterialIcons name="notifications-active" size={26} color={tintColor}/>
      );
    };
    return { tabBarLabel, tabBarIcon };
  };
  render() {
    return (
      <View style={styles.container}>
          <Search />
        <Text> Announce Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    alignContent: 'center',
    backgroundColor:"#ffab00"
  }
});
