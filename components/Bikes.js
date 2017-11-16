import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native'
import Maintenance from './Maintenance'

const Bikes = ({
  bikes
}) => {

  return (

    <Image style={ styles.background }>

    {/* logo and my bike text */}
    <View style={{flexDirection: 'row'}}>
      <Text style={ styles.muliLight }>     my</Text>
      <Text style={ styles.logo }>&#xf206;</Text>
      <Text style={ styles.muliLight }>bike     </Text>
    </View>

    <Maintenance />
    <Text>{ bikes[0].id }</Text>
    <Text>{ bikes[0].cyclist_id }</Text>
    <Text>{ bikes[0].name }</Text>
    <Text>{ bikes[0].total_mileage }</Text>
    <Text>{ bikes[1].bike_id }</Text>
    <Text>{ bikes[1].brake_pads }</Text>
    <Text>{ bikes[1].chain }</Text>
    <Text>{ bikes[1].id }</Text>
    <Text>{ bikes[1].tires }</Text>

    </Image>

  )

}

export default Bikes
