import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Modal from "react-native-modalbox";

import { SearchBar } from "react-native-elements";

import DatalistDistric from "../utils/DatalistDistric";

import {AntDesign} from '@expo/vector-icons'

let { width, height } = Dimensions.get("window");
export default class LocationScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search:''
      };
    };
    
  render() {
      const {search} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../assets/transparent_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity
            title="Chọn vùng bạn ở"
            style={styles.buttonLocation}
            activeOpacity={1}
            onPress={() => {
              this.refs.myModal.open();
            }}
          >
            <Text style={styles.textButton}>Chọn vùng bạn ở</Text>
            <AntDesign name="caretdown" size={18} />
          </TouchableOpacity>
          <Text style={styles.text}>Để tìm được món hời gần nhà</Text>
        </View>
        <Image
          source={require("../assets/imageLocation.png")}
          style={styles.imageWellcome}
          resizeMode="contain"
        />
        <Modal
          ref={"myModal"}
          style={{
            justifyContent: "center",
            width: width - 80,
            height: height * 0.7
          }}
          backdrop={true}
          position="center"
          // onClosed={() => {
          //   //thay doi authenticated
          //   this.props.getRegion(search);
          // }}
        >
          <SearchBar
            placeholder="Tìm vùng bạn ở"
            placeholderTextColor="gray"
              onChangeText={text => this._updateSearch(text)}
              value={search}
            platform="android"
            containerStyle={{
              padding: 0,
              paddingBottom: 0,
              paddingTop: 0
            }}
            inputContainerStyle={{
              backgroundColor: "#c4c4c4",
              width: "100%"
            }}
            inputStyle={{ color: "black" }}
          />
          <ScrollView>
            {DatalistDistric.map((item, index) => (
              <TouchableOpacity
                key={item.name}
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderBottomColor: "#c4c4c4",
                  height: 50,
                  width: "90%",
                  alignSelf: "center"
                }}
                onPress={() => {
                  this.props.getRegion(item.name);
                  // console.log(item.name);
                  this.refs.myModal.close();
                }}
                activeOpacity={0.5}
              >
                <View key={item.name} style={styles.buttonContainer}>
                  <Text style={styles.textModal}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Modal>
      </View>
    );
  }
}
LocationScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffab00",
    alignItems: "center"
  },
  topContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 0.6,
    width: 165,
    height: 60
  },

  buttonLocation: {
    flexDirection:'row',
    width: width * 0.55,
    height: 50,
    justifyContent:"space-around",
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 13,
    paddingHorizontal: 18,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    marginBottom: 10

  },
  textButton: {
    fontSize: 14,
    fontWeight: "500"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  imageWellcome: {
    flex: 0.6,
    width: width
  },
  buttonContainer: {
    width: "90%",
    height: 50,
    justifyContent: "center"
  },
  textModal: {
  }
});
