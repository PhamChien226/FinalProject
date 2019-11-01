import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

class CategoryItem extends Component {
    render() {
        const {id_mobile_category} = this.props.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.onFilterCategory(id_mobile_category);
                    this.props.postLogEventClick();
                }}
                >
                {this.props.item.icon}
                </TouchableOpacity>
            </View>
        )
    }
}
export default withNavigation(CategoryItem)

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        backgroundColor:"#F2F2F2",
        borderRadius:25,
        margin:15,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        position:'absolute',
        top:-10,
        left:-10,
        right:0,
        bottom:0,
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
    }
})
