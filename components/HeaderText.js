import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderText = props => {
  return <Text style={styles.headerText}>{props.title}</Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 25,
    color: '#676767',
  },
});
