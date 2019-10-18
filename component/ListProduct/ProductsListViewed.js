import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ProductsListViewed extends Component {
    render() {
        return (
            <View>
                <Text> Sản phẩm đã xem </Text>
                <MiniAddView />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
