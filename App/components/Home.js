import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet,  Dimensions, } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native-animatable";
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import * as firebase from "firebase";
import HorizontaBarChart from '../constants/charts/Barchart';
import Areachart from "../constants/charts/Areachart";
import Linechart from "../constants/charts/Linechart";
import Piechart from "../constants/charts/Piechart";
import Areastacked from "../constants/charts/Areastacked";
import Progresschart from "../constants/charts/Progresschart";
//import React Native chart Kit for different kind of Chart

       

export default class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal01: false,
      modal02: false,
      modal03: false,
      modal04: false,
      modal05: false,
      modal06: false,

    };
  }

  render() {
    return (
        <View style={{alignItems:'center'}}>
      <SafeAreaView style={styles.container}>
          
        <Modal
          transparent={true}
          isVisible={this.state.modal01}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30 }}>
                Summary
            </Text>
        <Areachart />

            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal01: false })}
            >
             <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal02}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30, }}>
                Summary
            </Text>
           <Areastacked />
            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal02: false })}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal03}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30, }}>
              Summary
            </Text>

<Linechart />

            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal03: false })}
            >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal04}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30, }}>
              Summary
            </Text>

            <Piechart />
            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal04: false })}
            >
             <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal05}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30, }}>
              Summary
            </Text>

            <Progresschart />
            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal05: false })}
            >
             <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal06}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ color: "black", fontSize: 30, }}>
              Summary
            </Text>
            <HorizontaBarChart />
            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 30,
                width: 180,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal06: false })}
            >
             <Text>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        
        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal01: true })}
        >
        <Ionicons name="md-speedometer" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Speed</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal02: true })}
        >
        <Ionicons name="md-swap" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Turning</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal03: true })}
        >
            
        <Ionicons name="md-car" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Parking</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal04: true })}
        >
        <Ionicons name="md-disc" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Braking</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal05: true })}
        >
        <Ionicons name="md-color-fill" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Fuel</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.modal}>
        <TouchableOpacity style={styles.button}
          onPress={() => this.setState({ modal06: true })}
          
        >
        <Ionicons name="md-construct" size={60}  style={{ alignSelf:'center', marginTop: 50}} 
          />
        <Text style={{textAlign:'center'}} >Maintence</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container:   {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    justifyContent: 'space-around',
    marginTop: 15, 
    },
 modal: {
    width: 132,
    marginTop: 5,
    height: 200,
    borderRadius: 4,
    borderWidth: 1.0,
    borderColor: 'black',
  
  },
  charts:{
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
    },
});