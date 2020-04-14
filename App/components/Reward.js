import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight,View } from "react-native";
import Fire from '../utilities/Fire';

export default class Modals extends React.Component {
   state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Congratulations</Text>

              <Text style={styles.modalText}>You earned your Reward!</Text>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Claim Now</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Claim?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center"
  }
});

