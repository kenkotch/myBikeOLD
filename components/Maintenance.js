import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
styles = require('../assets/stylesheet/Styles')

const Maintenance = ({
  bikes
}) => {
  return (
    <View style={ styles.center }>
      <Text>Some bike data:</Text>
      <Text>{ bikes[0].id }</Text>
      <Text>{ bikes[0].cyclist_id }</Text>
      <Text>{ bikes[0].name }</Text>
      <Text>{ bikes[0].total_mileage }</Text>
      <Text>{ bikes[1].bike_id }</Text>
      <Text>{ bikes[1].brake_pads }</Text>
      <Text>{ bikes[1].chain }</Text>
      <Text>{ bikes[1].id }</Text>
      <Text>{ bikes[1].tires }</Text>
    </View>
  )
}

export default Maintenance
