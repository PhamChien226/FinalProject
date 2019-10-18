import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  Dimensions,
  Alert
} from "react-native";
// import { SafeAreaView } from 'react-navigation';
import { AsyncStorage } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import { withNavigation } from "react-navigation";
import Modal from "react-native-modalbox";

let { width, height } = Dimensions.get("window"); 
 export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isSignin: true,
      name: "",
      token: "",
      id: ""
    };
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  componentDidMount = () => {
    console.log("component Did mount");
  };
  callAPI = () => {
    console.log("Call API");
  };
  onPressLogin = async () => {
    console.log("click login");
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync("524321501681175", {
        permissions: ["public_profile"]
      });
      console.log(type);
      console.log(token);
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const datajson = await response.json();
        this.setState({
          name: datajson.name,
          token: token,
          id: datajson.id
        });
      } else {
        // type === 'cancel'
      }
      await this.callAPI();
      // await this.props.navigation.navigate("Home");
      await this.refs.myModal.close();
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  showLoginModal = () => {
    this.refs.myModal.open();
  };

  render() {
    return (
      //vung an toan cua tai tho
      <Modal
        ref={"myModal"}
        style={{
          justifyContent: "center",
          width: width,
          height: height
        }}
        position="center"
        // onClosed={() => {}}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            {/* <StatusBar barStyle="light-content"> */}
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <TouchableOpacity
                style={styles.container}
                onPress={Keyboard.dismiss}
                activeOpacity={1}
              >
                <View style={styles.container}>
                  <View style={styles.header}>
                    <Text style={styles.textSignin}>Đăng Nhập</Text>
                    <Text style={styles.textSignup}>Đăng Kí</Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <View style={styles.inputWrapper}>
                      <View style={styles.inputPhoneWrapper}>
                        <SimpleLineIcons
                          name="user"
                          size={25}
                          style={{ padding: 4, alignContent: "center" }}
                        />
                        <View style={styles.inputPhone}>
                          <Text style={styles.textPhone}>Số điện thoại</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your phone"
                            placeholderTextColor="gray"
                            keyboardType="default"
                            returnKeyType="next"
                            autoCorrect={false}
                            onSubmitEditing={() =>
                              this.refs.txtPassword.focus()
                            }
                            onChangeText={text => {
                              this.setState({ username: text });
                            }}
                          />
                        </View>
                      </View>
                      <View style={styles.inputPhoneWrapper}>
                        <SimpleLineIcons
                          name="lock"
                          size={25}
                          style={{ padding: 4, alignContent: "center" }}
                        />
                        <View style={styles.inputPhone}>
                          <Text style={styles.textPhone}>Mật Khẩu</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter passwords"
                            placeholderTextColor="gray"
                            returnKeyType="go"
                            autoCorrect={false}
                            secureTextEntry={true}
                            ref={"txtPassword"}
                            onChangeText={text => {
                              this.setState({ password: text });
                            }}
                          />
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => {
                        // this.props.navigation.navigate("Home");
                      }}
                    >
                      <Text style={styles.textButton}>SIGN IN</Text>
                      <Ionicons
                        name="ios-arrow-dropright-circle"
                        size={30}
                        color="white"
                        style={styles.iconButton}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.btFbContainer]}
                      onPress={() => {
                        this.onPressLogin();
                        // this.props.navigation.navigate("Home");
                      }}
                    >
                      <Ionicons
                        name="logo-facebook"
                        size={30}
                        color="white"
                        style={[styles.iconBtFb]}
                      />
                      <Text style={[styles.textBtFb]}>Login with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btForgetContainer}
                      onPress={() => {
                        // this.props.navigation.navigate("Home");
                      }}
                    >
                      <Text style={styles.textBtForget}>Quên mật khẩu ?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            {/* // </StatusBar> */}
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
}
// export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
    flexDirection: "column",
    paddingTop:3,
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffab00"
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 18
  },
  textSignin: {
    fontSize: 20
    // fontWeight:'bold',
  },
  textSignup: {
    fontSize: 20,
    // fontWeight:'bold',
    color: "#7B7B7B"
  },
  infoContainer: {
    position: "relative",
    top: height * 0.08,
    left: 0,
    right: 0,
    height: 200,
    padding: 20,
    marginHorizontal: 15
  },
  inputWrapper: {
    backgroundColor: "white",
    shadowColor: "#000",
    borderRadius: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: 20
  },
  inputPhoneWrapper: {
    flexDirection: "row"
  },
  inputPhone: {},
  textPhone: {
    paddingHorizontal: 10,
    fontStyle: "italic",
    color: "gray"
  },

  input: {
    height: 30,
    opacity: 0.2,
    color: "#FFF",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#f7c744",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center"
  },
  textButton: {
    flex: 0.9,
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18
  },
  iconButton: {
    flex: 0.15
  },
  btFbContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2",
    marginTop: 15
  },
  iconBtFb: {
    flex: 0.15,
    textAlign: "center"
  },
  textBtFb: {
    flex: 0.7,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800"
  },
  btForgetContainer: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5E5B3",
    marginTop: 15,
    opacity: 0.6
  },
  textBtForget: {
    textAlign: "center",
    fontSize: 18
  }
});
