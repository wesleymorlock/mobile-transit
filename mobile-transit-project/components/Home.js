import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Header from './Header.js';
import ImgButton from './ImgButton.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header />
        <TextInput placeholder="Just write whatever you want" style={styles.inputField}></TextInput>
        <Button
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