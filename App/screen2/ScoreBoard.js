import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet,  Dimensions, ScrollView, Button, View } from "react-native";
import Fire from '../utilities/Fire';
import Leaderboard from 'react-native-leaderboard';

       

export default class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {userName: 'Test 001', highScore: 100},
            {userName: 'Test 002', highScore: 90},
            {userName: 'Test 003', highScore: 80},
            {userName: 'Test 004', highScore: 70},
            {userName: 'Test 005', highScore: 60},
            {userName: 'Test 006', highScore: 50},
            {userName: 'Test 007', highScore: 40},
            {userName: 'Test 008', highScore: 30},
            {userName: 'Test 009', highScore: 20},
            {userName: 'Test 010', highScore: 10},
            {userName: 'Test 011', highScore: 0},
        ]
    }
    
    }

  render() {
    
    return (
      <Leaderboard 
      data={this.state.data} 
      sortBy='highScore' 
      labelBy='userName'/>
    );
  }
};