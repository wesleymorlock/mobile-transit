import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';

import Header from './components/Header.js';
import ImgButton from './components/ImgButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TextInput placeholder="Just write whatever you want" style={styles.inputField}></TextInput>
        <ImgButton style={styles.mapBtn} purpose="Map" />
        <ImgButton style={styles.favoritesBtn} purpose="Favorites" />
        <ImgButton style={styles.infoBtn} purpose="Information" />
        <ImgButton style={styles.scheduleBtn} purpose="Schedule" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField:{
    height: 50,
    width: 250,
    borderColor:'gray',
    borderWidth: 1,
    padding: 10,
    color: 'gray'
  },

  mapBtn: {
  },

  favoritesBtn: {
  },

  infoBtn: {
  },

  scheduleBtn: {
  },
});
