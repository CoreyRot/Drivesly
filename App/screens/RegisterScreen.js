import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation,  } from "react-native";
import Fire from '../utilities/Fire';
import { Ionicons } from '@expo/vector-icons';
import UserPermissions from '../utilities/UserPermissions';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from "react-native-gesture-handler";

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

state = {
    user: {
    name: "",
    email: "",
    password: "",
    location: "",
    avatar: null
  },
  errorMessage: null
 
};

handlePickAvatar = async () => {
UserPermissions.getCameraPermission()

let result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3]
});

if(!result.cancelled) {
  this.setState({ user: { ...this.state.user, avatar: result.uri } });
  }
};


handleSignup = () => {
  Fire.shared.createUser(this.state.user);
};

render() {
  LayoutAnimation.easeInEaseOut();
    return(
        <View style={styles.container}>
          <StatusBar barStyle="light-content"></StatusBar>
          <Image source={require("../assets/header.png")} style={{marginTop: -40, marginLeft: -50}}></Image>
          <Image source={require("../assets/footer.png")} style={{position: "absolute", bottom: -180, right: -225}}></Image>

          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Login")}>
            <Ionicons name="ios-arrow-round-back" size={32} color="white"></Ionicons>
          </TouchableOpacity>

          <View style={{position: "absolute", top: 64, alignItems: "center", width: "100%"}}>
              <Text style={styles.greeting}>{'Welcome to Drivesly! \nSign up to get started'}</Text>
              <TouchableOpacity style={styles.avatarPlaceHolder} onPress={this.handlePickAvatar}>
                <Image source={{uri: 'this.state.user.avatar'}} style={styles.avatar} />
                <Ionicons
                  name="ios-add"
                  size={40}
                  color="#FFF"
                  style={{marginTop: 6, marginLeft: 2}}
                ></Ionicons>
              </TouchableOpacity>
          </View>

            
        
        <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
        
        <View style={styles.form}>
        <View>
             <Text style={styles.inputTitle}>Full Name</Text>
             <TextInput style={styles.input} 
             autoCapitalize="none"
             onChangeText={name => this.setState({ user: { ...this.state.user, name} })}
             value={this.state.user.name}
             ></TextInput>
            </View>

           <View style={{marginTop: 32}}>
             <Text style={styles.inputTitle}>Email</Text>
             <TextInput style={styles.input} 
             autoCapitalize="none"
             onChangeText={email => this.setState({ user: { ...this.state.user, email} })}
             value={this.state.user.email}
             ></TextInput>
            </View>

            <View style={{marginTop: 32}}>
             <Text style={styles.inputTitle}>Location</Text>
             <TextInput style={styles.input} 
             autoCapitalize="none"
             onChangeText={location => this.setState({ user: { ...this.state.user, location} })}
             value={this.state.user.location}
             ></TextInput>
            </View>

            <View style={{marginTop: 32}}>
             <Text style={styles.inputTitle}>Password</Text>
             <TextInput style={styles.input} 
             secureTextEntry
             autoCapitalize="none"
             onChangeText={password => this.setState({ user: { ...this.state.user, password} })}
             value={this.state.user.password}
             ></TextInput>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
            <Text style={{color: "white", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignSelf:"center", marginTop: 32}}
          onPress={() => this.props.navigation.navigate("Login")}
            >
            <Text style={{color: "gray", fontSize: 13}}>
              Already have an account? <Text style={{ fontWeight: "500", color:"red"}}>Login</Text>
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
},

back:  {
position: "absolute",
top: 48,
left: 32,
width: 32,
height: 32,
borderRadius: 16,
backgroundColor: "rgba(21,22,48,0.1)",
alignItems: 'center',
justifyContent: 'center',
},

avatarPlaceHolder:{
  borderRadius: 50,
  backgroundColor: "#E1E2E6",
  marginTop: 48,
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 100,
},
avatar: {
  position:"absolute",
  width: 100,
  height: 100,
  borderRadius: 50,
 
}

});

