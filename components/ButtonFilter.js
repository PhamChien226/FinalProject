import React from 'react';
import { View,StyleSheet } from 'react-native';
import Text from './CustomText'
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonFilter = ({ children, style,...props }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={()=> alert("On Press")}>
    <View style={styles.wrapperText}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textKindFilter}>{props.nameKindFilter}</Text>
    </View>
    <AntDesign name="down" size={12} color="#676767" />
  </TouchableOpacity>
);

export default ButtonFilter;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapperText:{
        flex:0.8
    },
    textTitle:{
      fontSize:13,
      color:'#9A9A9A'
    },
    textKindFilter:{
      fontSize:14,
      color:'#1C1C1C'

    },
    icon:{
        flex:0.2    
    },
})
