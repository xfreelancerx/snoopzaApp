import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BorderBottom = (props) => {
  const color = useSelector(state => state.color.color);

  return (
    <View style={[styles.bottomBorder, {borderBottomColor: props.focus == "Enter Email" ? color : color}]}></View>
  );
};

export default BorderBottom;

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 0.4,
    width: '98%',
    position: "absolute",
    bottom: wp("-5%"),
    marginBottom:50 ,
  },
});
