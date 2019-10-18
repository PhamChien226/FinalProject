import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'
import {EvilIcons} from '@expo/vector-icons'

let{width, height} = Dimensions.get('window')
export default class LocationMerchant extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:"bold",color:'gray'}}> Khu Vực </Text>
                <View style={styles.locationWrapper}>
                    <EvilIcons name="location" size={30} />
                    <Text>Phường 26, Quận Bình Thạnh, Tp Hồ Chí Minh</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:65,
        width:width*0.95,
        alignSelf:'center',

    },
    locationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#c4c4c4',
        borderTopColor:"#c4c4c4",
        borderColor:'white',
        borderWidth:1,
        paddingVertical:10
    }
    
})
