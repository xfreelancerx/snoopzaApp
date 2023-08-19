import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Word = (props) => {
  return (
      <Text style={styles.forgotPassword}>{props.title}</Text>
  )
}

export default Word;

const styles = StyleSheet.create({
    forgotPassword: {
        color: '#676767',
        fontSize: 14,
        position: "absolute",
        alignSelf: 'center',
        fontFamily: 'Arial',
        bottom: 25,
  
        
      },
})