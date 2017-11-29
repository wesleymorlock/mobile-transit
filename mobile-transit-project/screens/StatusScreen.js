import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import { FavoritedStations } from '../globals/FavoritedStations';

export default class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Status',
  };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    console.log(params);

    return (
        <View style={styles.container}>
          <Text style={styles.statusTxt}>Destination: {params.dest}</Text>
          <Text style={styles.statusTxt}>Distance to Destination: {params.dist}</Text>
          <Text style={styles.statusTxt}>Time Remaining: {params.ETA}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    justifyContent: 'center',
    paddingLeft: 30,
  },

  statusTxt: {
    fontSize: 20,
    paddingBottom: 30,
  }
});
