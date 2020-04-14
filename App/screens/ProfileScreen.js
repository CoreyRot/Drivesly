import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button, Image, Dimensions } from "react-native";
import Fire from '../utilities/Fire';
import { Ionicons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle';
import ProfileTab from '../navigation/ProfileTab';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
      };

   constructor(props) {
     super(props);
     this.state = {
        user: {}
     }
   }


    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid

        this.unsubscribe = Fire.shared.firestore
            .collection("users")
            .doc(user)
            .onSnapshot(doc => {
                this.setState({ user: doc.data() });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();

    }

    unsubscribe = null;

render() {
    return(
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", }}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Settings")}>
            <Ionicons name="md-more" size={32} color="black"></Ionicons>
          </TouchableOpacity>
            </View>

            <View style = {{ alignItems: "center", alignSelf: 'center', justifyContent: 'center' }}>
              <View style={styles.avatarContainer}>
                <Image 
                    style={styles.avatar} 
                    source={
                        this.state.user.avatar 
                            ? { uri: this.state.user.avatar } 
                            : require("../assets/avatar.png")
                    }
                /> 
                </View> 
                <Text style={styles.name}>{this.state.user.name}</Text> 
            </View>

            <View style={styles.container}>
      <ProfileTab />
    </View>

        </View>

        );
    }
}

const styles = StyleSheet.create({
container:{
    justifyContent: "center",
    textAlign: 'center',
    flex: 1,
},
avatarContainer:{
    alignSelf: 'center',
    shadowColor: "#151734",
    shadowRadius: 15,
    marginBottom: 20,
    shadowOpacity: 0.4
},
avatar: {
    width: 150,
    height: 150,
    borderRadius: 88
},
name: {
    textAlign:'center',
    fontSize: 35,
    fontWeight: "300",
    alignSelf: 'center'
},
subContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: "20%",
    alignItems: "center",
    marginTop: 4,
    height: 40
},
stat: {
    alignItems:"center",
},
info: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300"
},
Title: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
    
},

back:  {
    marginTop: 48,
    left: 160,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: 'center',
    justifyContent: 'center',
    },

});