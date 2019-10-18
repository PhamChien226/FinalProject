import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/Login";
import DashboardScreen from "../screens/Dashboard";

const AppNavigation = authenticated =>
  createStackNavigator(
    {
      // login: {
      //   getScreen: () => LoginScreen,
      //   navigationOptions: {
      //     title: "Login"
      //   }
      // },
      dashboard: {
        getScreen: () => DashboardScreen,
        navigationOptions: {
          title: "DashBoard"
        }
      }
    },
    {
      // initialRouteName: authenticated ? "dashboard" : "login"
      initialRouteName:"dashboard"
    }
  );
const AppContainer = authenticated =>
  createAppContainer(AppNavigation(authenticated));
export default AppContainer;
