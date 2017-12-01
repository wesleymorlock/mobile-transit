import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';
import geolib from 'geolib'

export default class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Status',
  };

  render() {
    const distMeters = geolib.getDistance(
      {latitude: this.props.navigate.state.params.loclat, longitude: this.props.navigate.state.params.loclong},
      {latitude: this.props.navigate.state.params.latitude, longitude: this.props.navigate.state.params.longitude}
    );

    let station_image = null
    let name = this.props.navigate.state.params.location;
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
          {station_image}
          <Text style={styles.statusTxt}>Destination: {this.props.navigate.state.params.location}</Text>
          <Text style={styles.statusTxt}>Distance Remaining: {miles}</Text>
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
  },
  img: {
    width: 300,
    height: 300,
  }
});
