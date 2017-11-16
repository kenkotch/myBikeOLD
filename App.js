import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

let fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='
// console.log(fetchThis)


// var showPosition = (position) => {
//   fetchThis = fetchThis + `${position.coords.latitude},${position.coords.longitude}`
// }
//
// var getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     // console.log("success!");
//   } else {
//     console.log('broken')
//   }
// }

// 'https://roads.googleapis.com/v1/snapToRoads?path=40.01650338027972,-105.28177227007887%7C40.01650338027972,-105.28177227007887%7C40.01650345439073,-105.2817625341559%7C40.01650345439073,-105.2817625341559&interpolate=true&key=AIzaSyB3X6GzbYtWZKAHEOvwGCqNP9cxp9XQvCg'

// getLocation()
// setInterval(getLocation, 1000)

// let holder = []
//
// let counter = () => {
//       holder.push('TEST')
//       console.log(holder);
// }
//
// setInterval(counter, 1000)

let holder = []

console.log(holder);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test',
      locations: [],
      fetchThis: 'https://roads.googleapis.com/v1/snapToRoads?path='
    };
    this.getLocation = this.getLocation.bind(this);
  }

  showPosition = (position) => {
    this.setState({
      fetchThis: this.state.fetchThis + `${position.coords.latitude},${position.coords.longitude}`
    });
    console.log(position.coords.latitude, position.coords.longitude);
    // holder.push(position.coords.latitude, position.coords.longitude)

    // fetchThis = fetchThis + `${position.coords.latitude},${position.coords.longitude}`
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
    const locationResponse = await fetch(`${this.state.fetchThis}`)
    console.log('internal fetch', this.state.fetchThis);
    const locationJSON = await locationResponse.json()
    // console.log("locationJSON", locationJSON);
    this.setState({locations: locationJSON})
    console.log(this.state);
  }


  render() {
    // setInterval(this.getLocation, 50000)
    this.getLocation
    return (
      <View style={styles.container}>
        <Text>{fetchThis}</Text>
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
































// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
//
// // let fetchThis = 'https://roads.googleapis.com/v1/snapToRoads?path='
// // console.log(fetchThis)
//
//
//
// // var getLocation = () => {
// //   if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(showPosition);
// //     // console.log("success!");
// //   } else {
// //     console.log('oh shit')
// //   }
// // }
//
// // var showPosition = (position) => {
// //   // fetchThis = fetchThis + `${position.coords.latitude},${position.coords.longitude}|`
// //   fetchThis = `${fetchThis}${position.coords.latitude},${position.coords.longitude}|`
// // }
//
//
// // 'https://roads.googleapis.com/v1/snapToRoads?path=40.01650338027972,-105.28177227007887%7C40.01650338027972,-105.28177227007887%7C40.01650345439073,-105.2817625341559%7C40.01650345439073,-105.2817625341559&interpolate=true&key=AIzaSyB3X6GzbYtWZKAHEOvwGCqNP9cxp9XQvCg'
//
//
// // getLocation()
// // setInterval(getLocation, 10000)
//
// // for (var i = 0; i < 20; i++) {
// //   getLocation()
// // }
//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.apiUrl = 'https://roads.googleapis.com/v1/snapToRoads'
//     this.apiKey = 'AIzaSyB3X6GzbYtWZKAHEOvwGCqNP9cxp9XQvCg'
//
//     this.state = {
//       test: 'test',
//       locations: []
//     }
//   }
//
//   // showPosition = (position) => {
//   //   lat = `${position.coords.latitude}`
//   //   long = ${position.coords.longitude}|
//   // }
//
//   // currentUrl = () => {
//   //   console.log(this.state.locations);
//   //   // let call = `${this.apiUrl}?path=${this.state.locations.join('|')}?key=${this.apiKey}`
//   //   // console.log(call);
//   // }
//
//   currentUrl = () => `${this.apiUrl}?path=${this.state.locations.join('|')}?key=${this.apiKey}`
//
//   setLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       console.log('broken')
//     }
//   }
//
//   // 1. Let componentDidMount. Do not immediately make the API request. Instead set up the loading screen.
//   // 2. Find the coordinates with a call back.
//   // 3. Send the request for the coordinates to the API
//   // 4. When the callback is invoked, then...
//   // 5. Make the promise to run the fetch to get the API response.
//   // 6. Then do something with locationJSON
//
//   componentDidMount = () => {
//     console.log(this.currentUrl())
//     fetch(this.currentUrl())
//       .then(locationResponse => locationResponse.json())
//       .then(locationJSON => console.log(locationJSON))
//       .catch(err => console.log(`Golly gosh darn ${err}`))
//   }
//
//   render() {
//
//     return (
//       <View style={styles.container}>
//         <Text>Heeeeyyyyyyy</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
