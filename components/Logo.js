import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SnoopzaLogo from "../assets/Logo.png"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Logo = () => {
  return (
    <View>
        <Image style={styles.img} source={SnoopzaLogo} />
    </View>
  )
}   

export default Logo;

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 100,
        top: wp("0.5%"),
        alignSelf: "center",
        transform:[{translateX: hp("2%"),}],
        position: "absolute",
    }
})  