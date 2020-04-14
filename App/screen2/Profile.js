import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput, View, TouchableOpacity, Button} from "react-native";
import { Divider, Block, Text, } from "../components";
import { theme } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import Fire from '../utilities/Fire'



export default class Profile extends React.Component {
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
  


  renderEdit(about) {
    const { user, editing } = this.state;


    return <Text bold>{user[about]}</Text>;
  }

  render() {
    const { user, editing } = this.state;

    return (
      <Block style={{backgroundColor: 'whitesmoke', }}>
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
        </ScrollView>

       
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 1.5
  },
  inputRow: {
    alignItems: "flex-end"
  },
    
});