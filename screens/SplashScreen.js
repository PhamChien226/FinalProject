import React, { Component } from 'react'
import { StyleSheet, View,Image } from 'react-native';

 export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
      setTimeout(() => {
        
        this.props.getDeviceId()
      }, 3000);
    }
    render() {
        return (
          <View style={styles.container}>
            <Image
              source={require("../assets/transparent_logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffba00"
  },
  logo: {
    width: 150,
    height: 150
  }
});
