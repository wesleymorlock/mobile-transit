import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Button
} from 'react-native';

import { FavoritedStations } from '../globals/FavoritedStations';

export default class FavoritesScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      dest: "",
      dist: 0,
      ETA: 0,
    };

    favorites = FavoritedStations.stationList.stations;
  };

  static navigationOptions = {
    title: 'Favorites',
  };

  onTap = (obj) => {

    console.log(FavoritedStations.stationList.stations)

    this.state.dest = obj.item.destination;
    this.state.dist = obj.item.distance;
    this.state.ETA = obj.item.remainingTime;
    this.props.navigation.navigate(
      "Status", 
      { 
        dest: this.state.dest,
        dist: this.state.dist,
        ETA: this.state.ETA,
      }
    );
  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={ styles.headerText }>Favorites:</Text>
          <FlatList 
            style={styles.tblRows}
            data={FavoritedStations.stationList.stations}
            renderItem={({item}) => <Button 
              style={ styles.rowText }
              title={item.destination}
              ref={component => this._stationBtn = component}
              onPress={() => this.onTap({item})}> </Button>} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tblRows: {
    padding: 20,
    width: 300,
  },

  headerText: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 30
  },

  rowText: {
    borderWidth: 2,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 2,
    height: 30,
    width: 250
  }
});
