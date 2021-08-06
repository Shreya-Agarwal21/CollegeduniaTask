import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

const mainScreen = () => {
 return(
    <AnimatedLoader
    visible={true}
    overlayColor="rgba(255,255,255,0.75)"
    source={require('../splashy-loader.json')}
    animationStyle={styles.lottie}
    speed={1}
  />
 )
}


const styles = StyleSheet.create({
    lottie: {
      width: 300,
      height: 300
    }
})

export default mainScreen;