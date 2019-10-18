import React, { Component } from "react";
import { Text, StyleSheet, View ,Image} from "react-native";
import { Search } from "../component";
import {AntDesign} from '@expo/vector-icons'

export default class UserInfoScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {} } = navigation.state;
    let tabBarLabel = 'Thêm';
    let tabBarIcon = ({tintColor}) => {
      return(
        // <Image
        //   source={require('../assets/user-icon.png')}
        //   style={{height:26, width: 26, }}
        // />
        <AntDesign name="menu-fold" size={20} color={tintColor}/>
      )
    }
    return { tabBarLabel,tabBarIcon };
  };
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <Text> UserInfoScreen</Text>
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
