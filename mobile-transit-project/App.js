import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  AppRegistry, 
  TextInput, 
  Button, 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const firebase = require("firebase");

import { FavoritedStations } from './globals/FavoritedStations';

import HomeScreen from './screens/Home';
import MapScreen from './screens/Map';
import FavoritesScreen from './screens/Favorites';
import InformationScreen from './screens/Information';
import ScheduleScreen from './screens/Schedule';
import SchedulePickerScreen from './screens/SchedulePicker';
import StatusScreen from './screens/StatusScreen';

const cheerio = require('react-native-cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   storageBucket: "",
// };
// firebase.initializeApp(firebaseConfig);

// Create a reference with .ref() instead of new Firebase(url)
// const rootRef = firebase.database().ref();
// const itemsRef = rootRef.child('items');

export default class App extends React.Component {
  render() {
    return <MTApp />;
  }
}

const MTApp = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Favorites: { screen: FavoritesScreen },
  Information: { screen: InformationScreen },
  SchedulePicker: { screen: SchedulePickerScreen },
  Schedule: { screen: ScheduleScreen },
  Status: { screen: StatusScreen },
});
