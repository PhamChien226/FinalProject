import React, { Component } from "react";
import SplashContainer from '../containers/SplashContainer';
import WelcomeStackScreen from '../screens/WelcomeStackScreen';
import AppContainer from '../navigation/MainTabNavigator'
 
export default class AppRoot extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.checkLogin();  
    this.props.checkIsUsed();  
  }
  

  render() {
    const {isLoading } = this.props.authState;
    const {isUsed } = this.props.userState;
      
    if(isLoading) return this._renderSplash()
    else if(isUsed) return this._renderAppRoot()
    else return this._renderWelcome()
  }

  _renderAppRoot() {
    const CreateRoot = AppContainer;
    return <CreateRoot />;
  }

  _renderSplash() {
    return (
      <SplashContainer/>
    );
  }
  _renderWelcome(){
    return(
      <WelcomeStackScreen/>
    )
  }
}
