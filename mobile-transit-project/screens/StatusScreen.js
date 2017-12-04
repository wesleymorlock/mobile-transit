import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image,
} from 'react-native';
import geolib from 'geolib'

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

    console.log(params.loclat, params.loclong, params.latitude, params.longitude);

    const { navigate } = this.props.navigation;
    const distMeters = geolib.getDistance(
      {latitude: params.loclat, longitude: params.loclong},
      {latitude: params.latitude, longitude: params.longitude}
    );

    console.log(distMeters);
    console.log(params.ETA);

    var station_image = null
    var name = params.location;
    if (name == "Auburndale") {
      station_image = <Image style={styles.img} source={require("../assets/images/Auburndale.jpg")}/>;
    } else if (name == "Bayside") {
      station_image = <Image style={styles.img} source={require("../assets/images/Bayside.jpg")}/>;
    } else if (name == "Douglaston") {
      station_image = <Image style={styles.img} source={require("../assets/images/Douglaston.jpg")}/>;
    } else if (name == "Great Neck") {
      station_image = <Image style={styles.img} source={require("../assets/images/Great Neck.jpg")}/>;
    } else if (name == "Little Neck") {
      station_image = <Image style={styles.img} source={require("../assets/images/Little Neck.jpg")}/>;
    } else if (name == "Manhasset") {
      station_image = <Image style={styles.img} source={require("../assets/images/Manhasset.jpg")}/>;
    } else if (name == "Plandome") {
      station_image = <Image style={styles.img} source={require("../assets/images/Plandome.jpg")}/>;
    } else if (name == "Port Washington") {
      station_image = <Image style={styles.img} source={require("../assets/images/Port Washington.jpg")}/>;
    }

    const miles = distMeters * 0.00062137;

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Status Update</Text>
          {station_image}
          <Text style={styles.statusTxt}>Destination: {params.location}</Text>
          <Text style={styles.statusTxt}>Distance to Destination: {miles} miles</Text>
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
    alignItems: 'center',
    paddingLeft: 30,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 10
  },

  statusTxt: {
    fontSize: 20,
    paddingBottom: 10,
  },

  img: {
    width: 200,
    height: 200,
  }
});
