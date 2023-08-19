import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
 
  
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity activeOpacity={0.6} style={styles.button} >
        <Text style={styles.btnTxt}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    borderWidth: 0,
    borderColor: 'rgb(255, 255, 255)',
    borderStyle: 'solid',
    borderRadius: 26,
    backgroundColor: 'rgb(72, 128, 163)',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 350,
    height: 30,
    marginBottom: 50,
  },
  btnTxt: {
    fontSize: 19,
    fontFamily: 'Arial',
    color: 'rgba(255, 255, 255, 0.412)',
    textAlign: 'center',
  },


});
