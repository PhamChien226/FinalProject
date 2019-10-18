import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import DatalistDistric from '../../utils/DatalistDistric'

class FilterComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => {
           this.props.navigation.navigate('ModalProvincial',{
              data:DatalistDistric,
              id_main_category: this.props.id_main_category,
              id_category: this.props.id_category,
              transparent: this.props.transparent
           })
          }}
        >
          <Text>Hồ Chí Minh</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>

        <View style={{ width: 1, height: 20, backgroundColor: "gray" }}></View>

        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => {
            alert("You onPress");
          }}
        >
          <Text>Đồ điện tử</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>

        <View style={{ width: 1, height: 20, backgroundColor: "gray" }}></View>

        <TouchableOpacity
        style={[styles.buttonFilter, styles.detailFilter]}
          onPress={() => {
            alert("You onPress");
          }}
        >
          <Text>Lọc</Text>
          <AntDesign name="caretdown" size={18} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(FilterComponent)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomColor:'gray',
    borderWidth:0.5,
    borderColor:'white'
  },
  buttonFilter: {
      flexDirection:'row',
      justifyContent:"space-around",
      flex:0.4,
      // backgroundColor:'green'

  },
  detailFilter:{
      flex:0.15

  },
});
