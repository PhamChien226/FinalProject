import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,AsyncStorage } from 'react-native';
import {connect} from 'react-redux'

class DashBoardScreen extends Component {   
    constructor(props) {
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
    }

    attemptLogout () {
        //DO VALIDATION & SERVER REQUEST

        //all good get token and go to user dashboard ?
        this.props.authLogout();
    }

    render() {
        // console.log('render')
        return (
            <View style={{flex:1,backgroundColor:"#ffffff", alignItems:'center',justifyContent:"center"}}>
                <Text children="Wellcome User"/>
                <Button color="#091000" title="loggout" onPress={this.attemptLogout}/>
            </View>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    return {
        // authState : state.authState
    }
}

export const actionCreator = (type,payload=null) =>({type,payload})

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        authLogout:()=>{
            AsyncStorage.multiRemove(['token','authenticated'])
            dispatch(actionCreator('LOGGOUT'))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoardScreen)


