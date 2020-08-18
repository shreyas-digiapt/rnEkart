import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationService} from '../services';
import * as Animatable from 'react-native-animatable';

// Props
interface SplashScreenProps {}

// SplashScreen Component
export default ({}: SplashScreenProps) => {

   setTimeout(()=> {
       NavigationService.navigate('LoginScreen2')
   }, 2800)

  return (
    <View style={styles.container}>
      <Animatable.Image animation='bounceOut' duration={3000} style={styles.image} source={require('../assets/leaf_prime.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
      width: 150,
      height: 150,
  },
});
