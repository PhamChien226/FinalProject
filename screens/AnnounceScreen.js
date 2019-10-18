import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Search } from "../component";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default class AnnounceScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = "Announce";
    let tabBarIcon = ({tintColor}) => {
      return (
        <MaterialCommunityIcons name="bell-ring-outline" size={26} color={tintColor}/>
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

// AnnounceScreen.navigationOptions  ={
// title:'Announce',
// tabBarIcon = () => {
//     <Image
//       source={require('../assets/announce-icon.png')}
//       style={{height:26, width: 26, tintColor:'#0067a7'}}
//     />
//   }

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    alignContent: 'center',
    backgroundColor:"#ffab00"
  }
});
