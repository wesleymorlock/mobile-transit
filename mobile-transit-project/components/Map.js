import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  AppRegistry, 
  TextInput,
  Navigator
} from 'react-native';

import Header from '../components/Header.js';
import ImgButton from '../components/ImgButton.js';
// import { button } from 'native-base';

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TextInput placeholder="Just write whatever you want" style={styles.inputField}></TextInput>
        <ImgButton style={styles.mapBtn} purpose="Back" />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
