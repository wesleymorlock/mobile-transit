import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  AppRegistry, 
  TextInput, 
  Picker,
  Button,
} from 'react-native';

import StationPicker from '../components/StationPicker';

export default class SchedulePickerScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule Picker',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return(
      <View style={styles.container}>
        <Text style={styles.menuTxt} >Choose a station:</Text>
        <StationPicker ref={(ref) => this._stationPicker = ref}/>
        <Button
          style={styles.favBtn}
          onPress={() => navigate("Schedule", { station: this._stationPicker.getPickerValue() } )}
          title="Submit" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuTxt: {
    fontSize: 30,
  }
});