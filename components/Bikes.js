import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native'
// import Maintenance from './Maintenance'

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

    <View style={ styles.center }>
      <Text style={ styles.subHeader }>Bike Name: { bikes[0].name }</Text>
      <Text style={ styles.subHeader }>Total Miles: { bikes[0].total_mileage }</Text>
      <Text style={ styles.maintData }>Miles left on brake pads { bikes[1].brake_pads }</Text>
      <Text style={ styles.maintData }>Miles left on chain { bikes[1].chain }</Text>
      <Text style={ styles.maintData }>Miles left on tires { bikes[1].tires }</Text>
    </View>

    </Image>

  )

}

export default Bikes
