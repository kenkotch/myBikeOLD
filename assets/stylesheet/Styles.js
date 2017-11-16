'use strict';
var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'transparent',
    fontFamily: 'Font Awesome',
    fontSize: 60,
    marginTop: 20,
    marginBottom: 1,
    textAlign: 'center',
    flex: 1
  },
  muliLight: {
    fontFamily: 'Muli Light',
    fontSize: 45,
    marginTop: 20,
    marginBottom: 1,
  },
  background: {
    backgroundColor: '#e29129',
    width: '100%',
    height: '100%',
  },
  center: {
    alignItems: 'center'
  },
  subHeader: {
    alignItems: 'center',
    fontFamily: 'Ovo',
    fontSize: '35'
  },
  maintData: {
    alignItems: 'center',
    fontFamily: 'Ovo',
    fontSize: '20'
  },
  hozRule: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
  }

});
