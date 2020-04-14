import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput, View, TouchableOpacity, Button} from "react-native";
import { Divider, Block, Text, } from "../components";
import { theme } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import Fire from '../utilities/Fire'



export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: true,
      editing: null,
      user: {}
    };
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
  

  handleEdit(about, text) {
    const { user } = this.state;
    user[about] = text;

    this.setState({ user });
  }

  toggleEdit(about) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? about : null });
  }

  renderEdit(about) {
    const { user, editing } = this.state;

    if (editing === about) {
      return (
        <TextInput
          defaultValue={user[about]}
          onChangeText={text => this.handleEdit([about], text)}
        />
      );
      
    }

    return <Text bold>{user[about]}</Text>;
  }

  render() {
    const { user, editing } = this.state;

    return (
      <Block>
        <View style={{ justifyContent: "center", alignItems: "center", }}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Profile")}>
            <Ionicons name="ios-arrow-round-back" size={32} color="black"></Ionicons>
          </TouchableOpacity>
            </View>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Settings
          </Text>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Name
                </Text>
                {this.renderEdit("name")}
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
              <Text gray2 style={{ marginBottom: 10 }}>
                  Bio
                </Text>
                {this.renderEdit("about")}
              </Block>
              {/* <Text medium secondary onPress={() => this.toggleEdit("about")}>
                
                {editing === "about" ?  "Save" : "Edit"}
                
              </Text> */}
              {/* <Button 
                onPress={() => { 
                 Fire.shared.addInfo(); 
                }} 
                title="Add" 
            />       */}
            </Block> 
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  E-mail
                </Text>
                {this.renderEdit("email")}
              </Block>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Location
                </Text>
                {this.renderEdit("location")}
              </Block>
            </Block>
          </Block>
          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Button 
                onPress={() => { 
                 Fire.shared.signOut(); 
                }} 
                title="Log Out" 
            />      
        </ScrollView>

       
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 1.5,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  inputRow: {
    alignItems: "flex-end"
  },
  back:  {
    marginTop: 48,
    marginBottom: 20,
    right: 160,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: 'center',
    justifyContent: 'center',
    },
    
});