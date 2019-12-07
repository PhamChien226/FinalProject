import React from 'react';
import { StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Text from './CustomText';

let width = Dimensions.get('window').width
const ButtonContact = ({
    children,style,select,...props
}) => (
    <TouchableOpacity {...props} style={[styles.button,style]}>
        {children}
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        width:width*0.31,
        height:35,
        borderRadius:3,
        backgroundColor: "#589F39",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color:"white" ,
        paddingLeft:5
    }
});


export default ButtonContact;
