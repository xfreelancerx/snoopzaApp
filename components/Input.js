import {StyleSheet, View, TextInput, Image, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {blurHandler, focusHandler} from '../functions/inputEvents';
import BorderBottom from './BorderBottom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {setEmail} from '../RTK/colorSlice';

const Input = props => {
  const dispatch = useDispatch();

  
  return (
    <View
      style={[styles.container, {marginTop: props.space ? props.space : ''}]}>
      {props.imageLabel ? (
        <Image style={styles.fafa} source={props.imageSource} />
      ) : (
        ''
      )}
      <TextInput
        onBlur={() =>  props.placeholder == 'Enter Email' ? blurHandler(dispatch) : blurHandler(dispatch)}
        onFocus={() =>props.placeholder == 'Enter Email' ? focusHandler(dispatch) : focusHandler(dispatch)}
        maxLength={props.placeholder == 'Enter Email' ? 40 : 20}  
        secureTextEntry={ props.placeholder == 'Enter Password'}
        style={{...styles.input, width: wp('80%')}}
        placeholder={props.placeholder}
     
      />
      {props.borderBottom ? <BorderBottom focus={props.placeholder} /> : ''}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    transform: [{translateY: 150}],
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    height: hp('10%'),
  },

  fafa: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: wp('-6%'),
  },
});
