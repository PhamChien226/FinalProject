import React, { Component } from 'react'
import { StyleSheet, View,Image,Dimensions } from 'react-native';
import Text from '../../components/CustomText';
import {Avatar} from 'react-native-elements';
import {AntDesign,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

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
                  // source={{
                  //   uri: avatar
                  // }}
                  source={require('../../assets/clown-fish.png')}
                  size="medium"
                  containerStyle={{padding:2}}
                />
              </View>
              <View style={styles.infoPersonal}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* <Text style={styles.nameMerchant}>{account_name}</Text> */}
                  <Text style={styles.nameMerchant}>Cá Hộp</Text>
                  <MaterialIcons name="store" size={16} color="#ffab00" />
                </View>
                <Text style={styles.textAddress}>
                  Phường 14, Quận Gò Vấp, Tp.Hồ Chí Minh
                </Text>
                <View style={styles.infoExtraWapper}>
                  <MaterialCommunityIcons
                    name="star"
                    size={12}
                    color="#F7C942"
                    style={{ paddingTop: 2 }}
                  />
                  <Text style={{ fontSize: 12, paddingRight: 12 }}>4.2</Text>
                  <View style={styles.distanWrapper}>
                    <View style={styles.dot}></View>
                    <Text style={styles.textExtra}>0.8km</Text>
                  </View>
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
    fontSize:14,
    fontWeight: "400",
    // paddingTop: 2,
    paddingRight:5
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
  distanWrapper:{
    flexDirection:"row",
    justifyContent:'flex-end',
    height:13,
    alignItems:'center' 
  },
  dot:{
    height:4,  
    width:4,
    borderRadius:2,
    backgroundColor:"#727C8E",
    alignSelf:'flex-end',
    marginRight:5,
    
  },
  textExtra:{
    fontSize:12,
    paddingTop:4
  }
});
