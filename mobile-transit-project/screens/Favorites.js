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
  static favorites = [];

  constructor() {
        super();

        favorites = FavoritedStations.stationList.stations;
    }

  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
        <View style={styles.container}>
          <Text>Hi</Text>
          <Text>{ FavoritedStations }</Text>
          <Text>Favorites:</Text>
          <FlatList 
            style={styles.tblRows}
            data={[{key: 'FavoritedStations.stationList.stations[0]'}, {key: 'Penn Station'}]}
            renderItem={({item}) => <Text>Hi</Text>} />
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

  rowText: {
    borderWidth: 2,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 2,
    height: 30,
    width: 250
  }
});
