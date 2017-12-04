import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image,
  Alert,
} from 'react-native';
import geolib from 'geolib';
import * as firebase from 'firebase';
import { FavoritedStations } from '../globals/FavoritedStations';
import { SELECTION } from '../globals/Selection';

var config = {
  apiKey: "AIzaSyAgjVKhNLO0wI4pAh5dtmSQ1DpSsimHH3I",
  authDomain: "mobile-transit-bbdf3.firebaseapp.com",
  databaseURL: "https://mobile-transit-bbdf3.firebaseio.com/",
  projectId: "mobile-transit-bbdf3",
  storageBucket: "mobile-transit-bbdf3.appspot.com",
  messagingSenderId: "270559937070"
};
firebase.initializeApp(config);

var database = firebase.database();

export default class StatusScreen extends React.Component {
  state = {
    myLat: 0,
    myLong: 0,
  } 

  static navigationOptions = ({ navigation }) => ({
    title: 'Status',
    headerRight: <Button 
      title="Map"
      onPress={() => navigation.navigate('Map')} />,
  });

  constructor() {
    super();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({myLat: position.coords.latitude});
        this.setState({myLong: position.coords.longitude});
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  addToFavorites = (location, latitude, longitude) => {

    // var exists = false;

    for (i = 0; i < FavoritedStations.stationList.stations.length; i++) { 
      if (location == FavoritedStations.stationList.stations[i].location){
        exists = true;
      }
    }

    firebase.database().ref('favorites/' + location).set({
      station: location,
      lat: latitude,
      lon: longitude
    });

    Alert.alert(
        'Added to Favorites'
      )
  }

  calcETA = (distance) => {
    var speed = 40;
    return(distance / speed);
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
    var ETA = 0;

    const distMeters = geolib.getDistance(
      {latitude: this.state.myLat, longitude: this.state.myLong},
      {latitude: params.latitude, longitude: params.longitude}
    );

    ETA = this.calcETA(distMeters);

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
    } else {
      station_image = <Image style={styles.img} source={require("../assets/images/Port Washington.jpg")}/>;
    }
    
    const miles = distMeters * 0.00062137;

    console.log("-----");
    console.log(ETA);

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Status Update</Text>
          {station_image}
          <Text style={styles.statusTxt}>Destination: {params.location}</Text>
          <Text style={styles.statusTxt}>Distance to Destination: {Math.round(miles)} miles</Text>
          <Text style={styles.statusTxt}>Time Remaining: {this.calcTime(ETA)} </Text>
          <Button title="Add to Favorites" onPress={() => this.addToFavorites(
              params.location,
              params.latitude,
              params.longitude
            )} />
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
