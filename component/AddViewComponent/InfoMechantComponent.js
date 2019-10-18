import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import {Avatar, Badge} from 'react-native-elements';
import {AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'

const Status = ()=>{
    return (
      <View>
        <View style={styles.status}></View>
        <Text style={{ color: "gray", margin: 5 }}>Đang hoạt động</Text>
      </View>
    );
}

let {width,height} = Dimensions.get('window')
export default class InfoMechantComponent extends Component {
    
  onPress=()=>{
    alert('You onPress')
  }
    render() {
        //contact su dung buttonGruop
        const {avatar,account_name} =this.props
        return (
          <View style={styles.container}>
            <View style={styles.infoPersonalWrapper}>
              {/* <View style={styles.infoPersonal}> */}
              <View style={styles.avatarMerchant}>
                <Avatar
                  rounded
                  source={{
                    uri: avatar
                  }}
                  size="medium"
                />

                {/* <Badge 
                  status="success"
                  containerStyle={{ position: "absolute", top: 4, right: 4 }}
                /> */}
              </View>
              <View style={styles.infoPersonal}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.nameMerchant}>{account_name}</Text>
                  <AntDesign name="home" size={23} color="#FFBA00" />
                </View>
                <Text style={styles.textAddress}>
                  Phường 14, Quận Gò Vấp, Tp.Hồ Chí Minh
                </Text>
                <View style={styles.infoExtraWapper}>
                  <MaterialCommunityIcons
                    name="star"
                    size={12}
                    color="#F7C942"
                    style={{paddingBottom:15,paddingLeft:10}}
                  />
                  <Text style={{ fontSize: 12,paddingRight:12 }}>4.2</Text>
                <Text style={styles.textExtra}>0.8km</Text>
                </View>

              </View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "column",
    // padding: 5,
    marginHorizontal: 10,
    paddingBottom: 5,
    justifyContent: "flex-start",
    // backgroundColor:"lightgreen"
  },
  infoPersonalWrapper:{
    flexDirection:'row',
    width:width*0.9
  },
  infoPersonal: {
    paddingLeft:7
  },
  avatarMerchant:{
    paddingTop:5
  },
  nameMerchant: {
    fontSize:16,
    fontWeight: "500",
    paddingTop: 2,
    paddingRight:15
  },
  infoMerchantWrapper:{
    height:50,
    flexDirection:'row',
    paddingLeft:40,
    justifyContent:'space-around',
  },
  infoMerchant:{
    justifyContent:"center",
    alignItems:'center'
  },
  infoExtraWapper:{
    flexDirection:'row'
  },
  textAddress:{
    fontSize:12,
    color:'#727C8E'
  },
  textExtra:{
    fontSize:12
  }
});
