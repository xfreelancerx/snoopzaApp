import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './components/Button';
import Word from './components/Word';
import HeaderText from './components/HeaderText';
import Logo from './components/Logo';
import Input from './components/Input';
import {Provider} from 'react-redux';
import * as  Pics from "./assets" 
import {useSelector} from "react-redux"
import store from './RTK/store';
const App = () => {
const Body = () => {
  const email = useSelector(state => state.color.email); // Get the email from the store

  return  (<View style={styles.parentContainer}>
  <Logo />
  <HeaderText title={'Please Enter your Credentials'} />
  <Input
    borderBottom
    imageLabel
    imageSource={Pics.email}
    placeholder={'Enter Email'}
  />
  <Input
    borderBottom
    imageLabel
    space = {70}
    imageSource={Pics.lock}
    placeholder={'Enter Password'}
  />
  <Button email={email} title="Activate" />
  <Word title={'Forget password ?'} />
</View> 
  )
}
  return (
    <Provider store={store}>
      {/* */}

<Body />

    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1, // This ensures your content takes the full height of the screen,
  },
});
