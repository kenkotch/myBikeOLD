import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native'
import Header from './Header'
import Start from './Start'
import Maintenance from './Maintenance'

const Bikes = (props) => {

  return (

    <Image style={ styles.background }>

      <Header />
      <Start />
      <Maintenance bikes={ props.bikes }/>


    </Image>

  )

}

export default Bikes
