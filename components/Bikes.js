import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native'

const Bikes = ({
  bikes
}) => {

  return (

    <Image
      style={ styles.background }
    >
    {/* logo and my bike text */}

    <View style={{flexDirection: 'row'}}>
      <Text style={ styles.muliLight }>     my</Text>
      <Text style={ styles.logo }>&#xf206;</Text>
      <Text style={ styles.muliLight }>bike     </Text>
    </View>


    <Text
      style={{
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 30,
        padding: 40,
        color: 'white'
      }}
    >
    </Text>



    </Image>

  )

}

export default Bikes
