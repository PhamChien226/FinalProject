import React from 'react';
import { View,TouchableOpacity,StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const ButtonGoback = ({ children, style, ...props }) => (
  <TouchableOpacity style={style} {...props}>
    <MaterialIcons name="arrow-back" size={31} color="#666666" />
  </TouchableOpacity>
);

export default ButtonGoback;

const styles = StyleSheet.create({
  button:{
    
  }
}); 
