import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { Search } from "../component";
import {SimpleLineIcons} from '@expo/vector-icons'


export default class HistoryScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {} } = navigation.state;
        let tabBarLabel = 'Tôi Bán';
        let tabBarIcon = ({tintColor}) => {
            return (
            //   <Image
            //     source={require("../assets/history-icon.png")}
            //     style={{ height: 26, width: 26 }}
            //   />
            <SimpleLineIcons name="user" color={tintColor} size={25}/>
            );
        }
        return { tabBarLabel,tabBarIcon };
      };
    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <Text> History Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        alignContent: 'center',
        backgroundColor:"#ffab00"
    },
})
