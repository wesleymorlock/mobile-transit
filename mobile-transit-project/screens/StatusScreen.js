import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

import { FavoritedStations } from '../globals/FavoritedStations';

export default class StatusScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Status',
    headerRight: <Button 
      title="Map"
      onPress={() => navigation.navigate('Map')} />,
  });

  constructor() {
    super();
  }

  calcTime = (minutes) => {
    var returnStr = ""

    if (minutes > 59) {
      var hrs = Math.floor(minutes / 60);
      var mins = (minutes % 60);

      var hourStr = hrs.toString() + (hrs == 1 ? " hour" : " hours");
      returnStr += hourStr;

      if (mins != 0) {

        var minuteStr = ", " + mins.toString() + (mins == 1 ? " minute" : " minutes");
        returnStr += minuteStr;
      }
    } else {
      returnStr = minutes.toString() + (minutes == 1 ? " minute" : " minutes");
    }

    return (returnStr)
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    console.log(this.props);

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Status Update</Text>
          <Text style={styles.statusTxt}>Destination: {params.dest}</Text>
          <Text style={styles.statusTxt}>Distance to Destination: {params.dist} miles</Text>
          <Text style={styles.statusTxt}>Time Remaining: {this.calcTime(params.ETA)} </Text>
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

  headerText: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 100
  },

  statusTxt: {
    fontSize: 20,
    paddingBottom: 30,
  }
});
