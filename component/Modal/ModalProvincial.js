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
  TouchableOpacity
} from "react-native";
import Modal from 'react-native-modalbox';
// import Button from 'react-native-button';
import {ListItem, CheckBox} from 'react-native-elements'

let{width,height} = Dimensions.get('window');
const listDistric = [
    {
        name:"Quận 1"
    },
    {
        name:"Quận 2"
    },
    {
        name:"Quận 3"
    },
    {
        name:"Quận 4"
    },
    
  ]
export default class ModalProvincial extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // checked:false,
            value:null,
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }

    render() {
        const {value} = this.state;
        const data = this.props.navigation.getParam('data')
        return (
          <Modal
            ref={"myModal"}
            style={{
              justifyContent: "center",
              width: width - 80
              //   height: height - 100
            }}
            position="center"
            
            onClosed={() => {}}
          >
            <View>
              {data.map((item, index) => (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    height: 35,
                    margin: 1,
                    // justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => {
                    this.setState({ value: item.name });
                    this.refs.ListItem.refreshCategory();
                    // this.props.navigation.navigate('ListItem')
                  }}
                  activeOpacity={0.9}
                >
                  <View key={item.name} style={styles.buttonContainer}>
                    <Text>{item.name}</Text>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={() => {
                        this.setState({ value: item.name });
                        this.refs.ListItem.refreshCategory();
                      }}
                    >
                      {value === item.name && (
                        <View style={styles.checkedCircle} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {/* <ListItem
                        key={i}
                        title={l.name}
                        // bottomDivider
                        containerStyle={{height:35}}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        rightElement={
                          <CheckBox
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='green'
                            checked={this.state.checked}
                          // onPress={() => this.setState({checked: !this.state.checked})}
      `
                          />
                        }
                      /> */}
                </TouchableOpacity>
              ))}
            </View>
          </Modal>

          // <Modal
          //     ref={'myModal'}
          //     style={{
          //         justifyContent: 'center',
          //         shadowRadius: 10,
          //         borderRadius: 20,
          //         width: screen.width - 80,
          //         height: 280
          //     }}
          //     position='center'
          //     //cham vao ben ngoai modal thi modal tu di xuong
          //     backdrop={true}
          //     onClosed={() => {
          //         // alert('Call when Modal closed');
          //     }}

          // >
          //     <Text
          //         style={{
          //             fontSize: 16,
          //             fontWeight: 'bold',
          //             textAlign: 'center',
          //             marginTop: 20
          //         }}
          //     >New's food information</Text>
          //     <TextInput
          //         style={{
          //             height: 40,
          //             borderBottomColor: 'gray',
          //             marginLeft: 30,
          //             marginRight: 30,
          //             marginTop: 20,
          //             marginBottom: 10,
          //             borderBottomWidth: 1
          //         }}
          //         onChangeText={(text) => { this.setState({ newFoodName: text }) }}
          //         placeholder="Enter new food's name"
          //         value={this.state.newFoodName}
          //     >
          //     </TextInput>
          //     <TextInput
          //         style={{
          //             height: 40,
          //             borderBottomColor: 'gray',
          //             marginLeft: 30,
          //             marginRight: 30,
          //             marginTop: 20,
          //             marginBottom: 10,
          //             borderBottomWidth: 1
          //         }}
          //         onChangeText={(text) => { this.setState({ newFoodDescription: text }) }}
          //         placeholder="Enter new food's description"
          //         value={this.state.newFoodDescription}
          //     >
          //     </TextInput>
          //     <Button
          //         style={{ fontSize: 16, color: 'white' }}
          //         containerStyle={{
          //             padding: 8,
          //             marginLeft: 70,
          //             marginRight: 70,
          //             height: 40,
          //             borderRadius: 6,
          //             backgroundColor: 'mediumseagreen'
          //         }}
          //         onPress={() => {
          //             if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
          //                 alert("You must enter food's name and description");
          //                 return;
          //             }
          //             const newKey = this.generateKey(24);
          //             const newFood = {
          //                 key: newKey,
          //                 name: this.state.newFoodName,
          //                 imageUrl: "https://i.pinimg.com/564x/30/a4/ac/30a4acd818689771440a9a46669da4d7.jpg",
          //                 foodDescription: this.state.newFoodDescription
          //             };
          //             flatListData.push(newFood);
          //             this.refs.myModal.close();
          //         }}
          //     >
          //         Save
          //     </Button>
          // </Modal>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 30,
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
})
