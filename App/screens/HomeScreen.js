import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet,  Dimensions, } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native-animatable";
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import { LineChart, BarChart, PieChart, StackedBarChart,} from 'react-native-chart-kit';
import * as firebase from "firebase";
import Charts from '../components/Home';
import Fire from '../utilities/Fire';
//import React Native chart Kit for different kind of Chart

       

export default class HomeScreen extends React.Component {
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
    return (
        <View style={{alignItems:'center'}}>
        <Header
  centerComponent={{ text: 'DashBoard', style: {fontSize: 25 } }}
  containerStyle={{
    backgroundColor: 'whitesmoke',
    justifyContent: 'space-around',
  }}
/>
<Text style={{ fontSize: 20}}>Overall Score</Text>
    <ProgressCircle
            percent={this.state.user.percent}
            radius={100}
            borderWidth={10}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            
        >
            <Text style={{ fontSize: 30 }}>{this.state.user.percent}%</Text>
        </ProgressCircle>

      <SafeAreaView style={styles.container}>
          <Charts />
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