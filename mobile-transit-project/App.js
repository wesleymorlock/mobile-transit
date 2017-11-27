import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  AppRegistry, 
  TextInput, 
  Button, 
  WebView 
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './components/Header.js';
import ImgButton from './components/ImgButton.js';
import MapScreen from './components/Map';

const cheerio = require('react-native-cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header />
        <Text>{$.html}</Text>
        <TextInput placeholder="Just write whatever you want" style={styles.inputField}></TextInput>
        <Button
          raised
          style={styles.mapBtn}
          onPress={() => navigate('Map')}
          title="Map" />
        <Button
          style={styles.favBtn}
          onPress={() => navigate('Favorites')}
          title="Favorites" />
        <Button
          style={styles.infoBtn}
          onPress={() => navigate('Information')}
          title="Information" />
        <Button
          style={styles.schedBtn}
          onPress={() => navigate('Schedule')}
          title="Schedule" />
      </View>
    );
  }
}

class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Favorites</Text>
        </View>
    );
  }
}

class InformationScreen extends React.Component {
  static navigationOptions = {
    title: 'Information',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Information</Text>
      </View>
    );
  }
}

class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <WebView 
        source={{uri: 'http://web.mta.info/lirr/Timetable/Station2/OysterBayOB1.pdf'}}
        style={{marginTop: 20}} />
    );
  }
}

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
  Schedule: { screen: ScheduleScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField:{
    height: 50,
    width: 250,
    borderColor:'#fff',
    borderWidth: 1,
    padding: 10,
    color: '#fff'
  },
});