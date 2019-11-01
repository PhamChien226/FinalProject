import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Platform,
  Dimensions,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
// import Modal from 'react-native-modalbox';
// import Button from 'react-native-button';
// import {ListItem, CheckBox} from 'react-native-elements'
import {withNavigation} from 'react-navigation'
import {AntDesign} from '@expo/vector-icons'

import DatalistDistric from '../utils/DatalistDistric'

let{width,height} = Dimensions.get('window');

class ModalProvincialScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value : null
      };
    };
    static navigationOptions = {
      header:null
    };
    showAddModal = () => {
      this.refs.myModal.open();
  }
    onPress =(item,id_category)=>{
     
    }
  render() {
      const {value} = this.state; 
      const data = this.props.navigation.getParam('data')
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={()=>{
        this.props.navigation.navigate('ListItem')
      }}>
          <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        <ScrollView>
        {data.map((item, index) => (
            <TouchableOpacity
            key={item.id_area}
            style={{
              borderWidth: 1,
              borderColor: "#c4c4c4",
              height: 50,
            }}
            onPress={async ()=>{
              await this.setState({ value: item.name });
              await this.props.onClickFilterCategory(item.id_area);
              await this.props.navigation.navigate('ListItem',{
              })
            }}
            activeOpacity={0.9}
          >
            <View key={item.name} style={styles.buttonContainer}>
              <Text>{item.name}</Text>
              <TouchableOpacity
                style={styles.circle}
                onPress={async () => {
                  this.setState({ value: item.name });
                 await this.props.onClickFilterCategory(item.id_area);
                }}
              >
                {value === item.name && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    );
  }
}

export default  withNavigation(ModalProvincialScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#ffab00",
    paddingTop:35,
    paddingLeft:10,
    paddingBottom:15
  },
  buttonContainer: {
    width:width,
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:15,
},
circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
},
checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'green',
},
});
