import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

let fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test',
      locations: [],
      holder: [],
      fetchThis: 'https://roads.googleapis.com/v1/snapToRoads?path='
    };
    this.getLocation = this.getLocation.bind(this);
  }

  showPosition = (position) => {
    this.setState({
      holder: this.state.holder + [position.coords.latitude, position.coords.longitude]
    });
    console.log(position.coords.latitude, position.coords.longitude);
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      // console.log("success!");
    } else {
      console.log('broken')
    }
  };

  async componentDidMount() {
    const locationResponse = await fetch(`${fetchThis}`)
    console.log('internal fetch', fetchThis);
    const locationJSON = await locationResponse.json()
    // console.log("locationJSON", locationJSON);
    this.setState({locations: locationJSON})
    console.log(this.state.holder);
  }


  render() {
    // setInterval(this.getLocation, 10000)
    return (
      <View style={styles.container}>
        <Text>{this.state.holder}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
