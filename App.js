import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeSelectedHandler = (place) => {
    this.setState(
      prevState => {
        return {
          selectedPlace: prevState.places.find(placeItem => placeItem.place === place)
        }
      }
    )
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return { places: prevState.places.concat({ place: placeName, image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Magical_Forest.png' } }) };
    });
  }

  onItemDeleteHandler = (place) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter(item => item.place != place),
        selectedPlace: null
      }
    })
  }

  onModalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail onItemDeleted={this.onItemDeleteHandler} onModalClosed={this.onModalCloseHandler} selectedPlace={this.state.selectedPlace} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList itemSelected={this.placeSelectedHandler} places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
