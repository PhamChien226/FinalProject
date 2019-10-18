  import React from "react";
  import { View, StyleSheet, Image } from "react-native";
  import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from "react-navigation";
  import {
    HomeScreen,
    MessageScreen,
    AnnounceScreen,
    HistoryScreen,
    UserInfoScreen,
    ListItemScreen,
    ItemScreen,
    LoginScreen,
    SplashScreen,
    ModalProvincialScreen ,
    CompareScreen,DetailCompareScreen,WelcomeStackScreen,
    ListAdInterestScreen
  } from "../screens";
  
import CompareScreenContainer from "../containers/CompareScreenContainer";
import ListItemContainer from "../containers/ListItemContainer";
import DetailCompareContainer from "../containers/DetailCompareContainer";

  import { AntDesign,Entypo } from "@expo/vector-icons";

  const HomeStack = createStackNavigator(
      {
        Home: HomeScreen,
        ListItem: ListItemContainer,
        // ListItem: ListItemScreen,
        ModalProvincial :ModalProvincialScreen,
        Item: ItemScreen,
        Login: LoginScreen,
        Splash: SplashScreen,
        DetailCompare: DetailCompareContainer,
        // Compare: CompareScreen,
        Compare: CompareScreenContainer,
        Wellcome: WelcomeStackScreen,
        Interest:ListAdInterestScreen
      },
    
      {
        initialRouteName: "Home",

      }
    );
    
    HomeStack.navigationOptions = ({ navigation }) => {

      let tabBarVisible = true;
      let tabBarLabel="Đi chợ";
      let tabBarIcon =({tintColor})=>{
        return <AntDesign name ="home" color={tintColor} size={26}/>
      }

      let routeName = navigation.state.routes[navigation.state.index].routeName

      if ( routeName == 'Item' ) {
      // if ( routeName == 'Wellcome' ) {
          tabBarVisible = false
      }

      return {
          tabBarVisible,tabBarLabel,tabBarIcon
      }
  }
      
    const MessageStack = createStackNavigator({
      Message: MessageScreen
    });
    MessageStack.navigationOptions = {
      tabBarLabel: "Chat",
      tabBarIcon: ({tintColor}) => {
        return (
          <Entypo name={"chat"} size={26} color={tintColor}  />
        );
      },
    };
    
    const TabNavigator = createBottomTabNavigator(
      {
        Home: HomeStack,
        Message: MessageStack,
        Announce: AnnounceScreen,
        History: HistoryScreen,
        UserInfo: UserInfoScreen
      },
      {
        animationEnabled: true,
        swipeEnabled: true,
        
        tabBarOptions: {
          activeTintColor: "#ffab00",
          inactiveTintColor: "gray",
          swipeEnabled:true,
          
          
        },
        TabNavigatorConfig:{
          swipeEnabled:true
        }
      }
    );
    
    const AppContainer = createAppContainer(TabNavigator);
    export default AppContainer;