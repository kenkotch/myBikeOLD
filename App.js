import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
styles = require('./assets/stylesheet/Styles')

import Bikes from './components/Bikes'

let fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='

var getLocation=()=>{
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("success!");
  } else {
    console.log('oh shit')
  }
}

var showPosition=(position)=>{
 fetchThis = fetchThis + `${position.coords.latitude},${position.coords.longitude}|`
 console.log('fetchThis', fetchThis);
}


// setInterval(getLocation, 5000);

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      locations: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    Font.loadAsync({
       'Font Awesome': require('./assets/fonts/fontawesome.ttf'),
       'Muli Light': require('./assets/fonts/Muli-Light.ttf'),
       'Muli Regular': require('./assets/fonts/Muli-Regular.ttf'),
       'Ovo': require('./assets/fonts/Ovo-Regular.ttf')

     });
    const locationResponse = await fetch(`https://roads.googleapis.com/v1/snapToRoads?path=${-35.27801,149.12958}%7C${-35.28032,149.12907}&interpolate=true&key=AIzaSyB3X6GzbYtWZKAHEOvwGCqNP9cxp9XQvCg`)
    const locationJSON = await locationResponse.json()
    // console.log("locationJSON", locationJSON);

    this.setState({
      locations:locationJSON,
      isLoading: false
    })
  }

  render() {
    return (

      this.state.isLoading ? <View><Text>Loading...</Text></View> :

      <View style={styles.container}>

        <Bikes />

      </View>
    );
  }
}
