import React from "react";

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from "react-navigation-tabs";

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardsScreen from './screens/RewardsScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppTabNavigator = createBottomTabNavigator(
  {
   Dashboard: {
      screen: HomeScreen,
      navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
      }
   },
   Rewards: {
    screen: RewardsScreen,
    navigationOptions: {
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-star" size={24} color={tintColor} />
    }
 },

Profile: {
  screen: ProfileScreen,
  navigationOptions: {
  tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
  }
},
  },
  {
    tabBarOptions:{
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: true

    }
  }
);

const AuthStack = createStackNavigator({
   Login: LoginScreen,  
   Register: RegisterScreen
   
  }
);




export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
      Settings: SettingsScreen,
    },
    {
      initialRouteName:"Loading"
    }
  )
)