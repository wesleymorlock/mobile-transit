import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  TouchableNativeFeedback,
  View,
  Animated,
  Easing
} from 'react-native'
import { StackNavigator, headerMode, navigationOptions } from 'react-navigation';
import MapView from 'react-native-maps'
import MapMarkerCallout from '../components/MapMarkerCallout'
import StatusScreen from './StatusScreen'

import { SELECTION } from '../globals/Selection';
import { FavoritedStations } from '../globals/FavoritedStations';

class MapPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      sideBarShowing: false,
      region: {
        latitude: 40.9549774,
        longitude: -76.8813942,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        Port_Washington = {
          latlng: {
            latitude: 40.8302,
            longitude: -73.6877,
          },
          title: 'Port Washington',
        },
        Plandome = {
          latlng: {
            latitude: 40.8101,
            longitude: -73.6952,
          },
          title: 'Plandome',
        },
        Manhasset = {
          latlng: {
            latitude: 40.7966,
            longitude: -73.6999
          },
          title: 'Manhasset',
        },
        Great_Neck = {
          latlng: {
            latitude: 40.7873,
            longitude: -73.7263
          },
          title: 'Great Neck',
        },
        Little_Neck = {
          latlng: {
            latitude: 40.7750,
            longitude: -73.7407
          },
          title: 'Little Neck',
        },
        Douglaston = {
          latlng: {
            latitude: 40.7681,
            longitude: -73.7494
          },
          title: 'Douglaston',
        },
        Bayside = {
          latlng: {
            latitude: 40.7632,
            longitude: -73.7720
          },
          title: 'Bayside',
        },
        Auburndale = {
          latlng: {
            latitude: 40.7614,
            longitude: -73.7899
          },
          title: 'Auburndale',
        },
      ]
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        SELECTION.choice.latitude = position.coords.latitude;
        SELECTION.choice.longitude = position.coords.latitude;
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  setSelection = (marker) => {
    SELECTION.choice.longitude = marker.latlng.longitude;
    SELECTION.choice.latitude = marker.latlng.latitude;
    SELECTION.choice.loclat = this.state.latitude;
    SELECTION.choice.loclong = this.state.longitude;
    SELECTION.choice.location = marker.title;

    this.props.navigation.navigate(
      'Destination',
      {
        ETA: SELECTION.choice.ETA,
        longitude: SELECTION.choice.longitude, 
        latitude: SELECTION.choice.latitude, 
        location: SELECTION.choice.location, 
        loclat: SELECTION.choice.loclat, 
        loclong: SELECTION.choice.loclong
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.7966,
            longitude: -73.7494,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        { this.state.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker.latlng}
              pinColor='red'
            >
              <MapView.Callout
                onPress={() => this.setSelection(marker) }>
                <MapMarkerCallout
                  title={marker.title}
                  description={marker.description}
                  imageUrl={marker.image}
                />
              </MapView.Callout>
            </MapView.Marker>
          )) }
        </MapView>
      </View>
    )
  }
}

const MapS = ( {navigation}) => (
  <MapPage navigation={navigation}/>
);

const Dest = ( {navigation}) => (
  <StatusScreen navigation={navigation}/>
);

const AppNavigation = StackNavigator({
    MapDisplay: {
      screen: MapS,
    }, 
    Destination: {
      screen: Dest,
    }
  })

export default class MapScreen extends React.Component{
  static navigationOptions = ({ navigation }) => ({
    title: 'Map',
    headerRight: <Button 
      title="Info"
      onPress={() => navigation.navigate('Destination', { 
        ETA: SELECTION.choice.ETA,
        location: SELECTION.choice.location,
        loclat: SELECTION.choice.loclat,
        loclong: SELECTION.choice.loclong,
        latitude: SELECTION.choice.latitude,
        longitude: SELECTION.choice.longitude,
       })} />
  });
  
  render() {
    return <AppNavigation />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0
  }
})
