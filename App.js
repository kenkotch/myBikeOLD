import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={test: 'test'}
  }
  render() {
    var getLocation=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log('oh shit')
      }
    }
      var showPosition=(position)=>{

          this.setState({test:position.coords.latitude})
          return(
            <h1>{this.state.test}</h1>
          )

      }
      getLocation()
    return (
      <View style={styles.container}>
        <Text>{this.state.test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
