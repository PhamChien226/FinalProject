import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
// import { WelcomeScreen, LocationScreen } from "./index";
import WelcomeScreen from './WelcomeScreen'
import LocationScreenContainer from '../containers/LocationScreenContainer'

export default class WelcomeStackScreen extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{ top: 10, left: 10, right: 10, bottom: 10 }}
      >
          <WelcomeScreen/>
          <LocationScreenContainer/>
      </ScrollView>
    );
  }
}
WelcomeStackScreen.navigationOptions={
  header:null
}

const styles = StyleSheet.create({});
