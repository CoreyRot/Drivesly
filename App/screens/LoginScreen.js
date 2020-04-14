import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation,  } from "react-native";
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

state = {
  email: "",
  password: "",
  errorMessage: null
};

handleLogin = () => {
  const {email, password} = this.state

  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}));
}

render() {
  LayoutAnimation.easeInEaseOut();
    return(
        <View style={styles.container}>
          <StatusBar barStyle="light-content"></StatusBar>
          <Image source={require("../assets/header.png")} style={{marginTop: -40, marginLeft: -50}}></Image>
          <Image source={require("../assets/footer.png")} style={{position: "absolute", bottom: -180, right: -225}}></Image>
          <Image source={require("../assets/logo.png")} style={{marginTop: -110, alignSelf: "center"}}></Image>
            
            <Text style={styles.greeting}>
              {'Hello again. \nWelcome back.'}
            </Text>
        
        <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
        
        <View style={styles.form}>
           <View>
             <Text style={styles.inputTitle}>Email</Text>
             <TextInput style={styles.input} 
             autoCapitalize="none"
             onChangeText={email => this.setState({ email })}
             value={this.state.email}
             ></TextInput>
            </View>

            <View style={{marginTop: 32}}>
             <Text style={styles.inputTitle}>Password</Text>
             <TextInput style={styles.input} 
             secureTextEntry
             autoCapitalize="none"
             onChangeText={password => this.setState({ password })}
             value={this.state.password}
             ></TextInput>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{color: "white", fontWeight: "500" }}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignSelf:"center", marginTop: 32}}
            onPress={() => this.props.navigation.navigate("Register")}
            >
            <Text style={{color: "grey", fontSize: 13}}>
              New to Drivesly? <Text style={{ fontWeight: "500", color: "red"}}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
        

        );
    }
}

const styles = StyleSheet.create({
container:{
    flex: 1,
},
greeting:{
  marginTop: 10,
  fontSize: 18,
  fontWeight: "400",
  textAlign: "center"
},
errorMessage:{
  height: 72,
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: 30
},
form: {
  marginBottom: 48,
  marginHorizontal: 30
},
inputTitle: {
  color: "gray",
  fontSize: 10,
  textTransform: "uppercase"
},
input:{
  borderBottomColor: "gray",
  borderBottomWidth: StyleSheet.hairlineWidth,
  height: 60,
  fontSize: 15,
  color:"#161F3D"
},
button: {
  marginHorizontal: 30,
  backgroundColor: "black",
  borderRadius: 4,
  height: 52,
  alignItems:"center",
  justifyContent:"center"
}

});