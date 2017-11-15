import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// let fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='
// console.log(fetchThis)



// var getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     // console.log("success!");
//   } else {
//     console.log('oh shit')
//   }
// }

// var showPosition = (position) => {
//   // fetchThis = fetchThis + `${position.coords.latitude},${position.coords.longitude}|`
//   fetchThis = `${fetchThis}${position.coords.latitude},${position.coords.longitude}|`
// }


// 'https://roads.googleapis.com/v1/snapToRoads?path=40.01650338027972,-105.28177227007887%7C40.01650338027972,-105.28177227007887%7C40.01650345439073,-105.2817625341559%7C40.01650345439073,-105.2817625341559&interpolate=true&key=AIzaSyB3X6GzbYtWZKAHEOvwGCqNP9cxp9XQvCg'


// getLocation()
// setInterval(getLocation, 10000)

// for (var i = 0; i < 20; i++) {
//   getLocation()
// }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='
    this.state = {
      test: 'test',
      locations: [],
      currentUrl: fetchThis
    }
  }

  showPosition = (position) => {
    this.currentUrl = `${this.state.currentUrl}${position.coords.latitude},${position.coords.longitude}|`
  }

  setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('oh shit')
    }
  }

  // async componentDidMount() {
  //   const locationResponse = await fetch(this.state.currentUrl)
  //   // console.log('internal fetch', fetchThis);
  //   const locationJSON = await locationResponse.json()
  //   console.log("locationJSON", locationJSON);
  //
  //   // this.setState({locations: locationJSON})
  // }

  componentDidMount = () => {
    fetch(this.state.currentUrl)
      .then(locationResponse => locationResponse.json())
      .then(locationJSON => console.log(locationJSON))
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Heeeeyyyyyyy</Text>
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
