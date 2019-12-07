import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

class CategoryItem extends Component {
    render() {
        const {id_mobile_category} = this.props.item;
        return (
          <TouchableOpacity  
            style={styles.button}
            onPress={() => {
              this.props.onFilterCategory(id_mobile_category);
              this.props.postLogEventClick();
            }}
          >
            <View style ={styles.wrapperItemCate}>
              {this.props.item.icon}
            </View>
              <Text style={styles.nameCategory}> {this.props.item.name}</Text>
            {/* {this.props.item.icon} */}
          </TouchableOpacity>
        );
    }
}
export default withNavigation(CategoryItem)

const styles = StyleSheet.create({
    button:{ 
        width:70,
        height:100,
        alignItems:'center',
        paddingTop: 10,
        marginHorizontal:5,
    },
    wrapperItemCate:{
        width:50,
        height:50,
        backgroundColor:"#F2F2F2",
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    nameCategory:{
        fontSize:12,
        width:65,
        textAlign:'center'
    },

})
