import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput,Image,Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements';

// let {width,height} = Dimensions.get('window')
export default class Search extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      search:''
   }
 }
 
  
  _updateSearch = text => {
    this.props.updateSearch(text)
    this.setState({
      search: text
    })
    

    // )
  }
  render() {
    const {search} = this.state;
    const {textplace,width} = this.props
    return (
      <View>
        <SearchBar
          placeholder={textplace}
          placeholderTextColor="gray"
          onChangeText={text => this._updateSearch(text)}
          value={search}
          platform="android"
          containerStyle={{
            backgroundColor: "#ffba00",
              width:width,
              alignSelf:'center'
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            width: width,
            borderRadius: 10,
            alignSelf:'center'
          }}
          inputStyle={{ color: "black" }}
        />
      </View>
    );
  }
  }
const styles = StyleSheet.create({
});