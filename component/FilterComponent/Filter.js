import React, { Component } from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import ButtonFilter from '../../components/ButtonFilter'
// import Text from '../../components/CustomText';

let width = Dimensions.get('window').width;
export default class Filter extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.wrapperFilter}>
              <ButtonFilter
                style={styles.buttonFilter}
                title={"Danh mục"}
                nameKindFilter="Đồ điện tử"
              ></ButtonFilter>
              <View style={styles.lineInBetween}></View> 
              <ButtonFilter
                style={styles.buttonFilter}
                title="Sắp xếp và Lọc"
                nameKindFilter="Mới nhất    "
              ></ButtonFilter>
            </View>
            <View style={styles.boderfilter}></View>
          </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container:{
        width:width,
        height:50,
        justifyContent:"center",
        alignItems:'center'
    },
    wrapperFilter:{
        flexDirection:'row',
        height:45,
        paddingTop:8,
        // justifyContent:'space-around', 
        // justifyContent:'space-between',
        alignItems:'center',
    },
    buttonFilter:{
        height:'100%',
        width:width*0.5,
        // backgroundColor:'red'
    },
    lineInBetween:{
        width:1,
        height:32,
        backgroundColor:"#E0E2E7",
        alignSelf:'center'
    },
    boderfilter:{
        width:width*0.92,
        height:2,
        backgroundColor:"#E0E2E7",
        alignSelf:'center',
        marginTop:5
    },
})
