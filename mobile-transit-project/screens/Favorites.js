import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Button
} from 'react-native';

import { FavoritedStations } from '../globals/FavoritedStations';
import { SELECTION } from '../globals/Selection';

export default class FavoritesScreen extends React.Component {

  constructor() {
    super();
  };

  static navigationOptions = {
    title: 'Favorites',
  };

  onTap = (obj) => {
    console.log("ssssssss");
    console.log(obj.item);

    this.props.navigation.navigate(
      'Status', { 
        ETA: obj.item.ETA,
        loclat: obj.item.loclat,
        loclong: obj.item.loclong,
        latitude: obj.item.latitude,
        longitude: obj.item.longitude,
        location: obj.item.location,
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
              title={item.location}
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
