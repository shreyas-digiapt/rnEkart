import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService} from '../services'

import KartScreen from '../screens/kart_screen';
import ListDesc from '../screens/list_desc';
import LoginScreen from '../screens/login_screen';
import LoginScreen2 from '../screens/login_screen2';
import Profile from '../screens/profile';
import StatusScreen from '../screens/status_screen';
import RegisterScreen from '../screens/register_screen';
import MainList from '../screens/main_list';
import SplashScreen from '../screens/splash_screen';



// Props
interface finenameProps {}

const {Navigator, Screen} = createStackNavigator();

// finename Component
export default ({}: finenameProps) => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef} >
      <Navigator initialRouteName='MainList' headerMode='none' screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }} >
      <Screen name='splashScreen' component={SplashScreen} />
      <Screen name='LoginScreen' component={LoginScreen} />
      <Screen name='LoginScreen2' component={LoginScreen2} />
      <Screen name='RegisterScreen' component={RegisterScreen} />
      <Screen name='Profile' component={Profile} />
      <Screen name='MainList' component={MainList} />
      <Screen name='ListDesc' component={ListDesc} />
      <Screen name='StatusScreen' component={StatusScreen} />
      <Screen name='kartScreen' component={KartScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

