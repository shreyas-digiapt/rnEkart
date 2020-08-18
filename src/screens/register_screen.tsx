import React from 'react';
import {View, Text, StyleSheet, Platform, Image, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatible from 'react-native-animatable';
import {createState} from '../utils';
import { NavigationService } from '../services';

// Props
interface RegisterScreenProps {}

// RegisterScreen Component
export default ({}: RegisterScreenProps) => {
  const {state, setState} = createState<{
    phone?: String;
    password?: String;
    cPassword?: String;
    passVisible?: boolean;
    cPassVisible?: boolean;
  }>({
    phone: '',
    password: '',
    cPassword:'',
    passVisible: false,
    cPassVisible: false
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
      <View style={[styles.header]}>
        <Image
          style={styles.image}
          source={require('../assets/leaf_logo.png')}
          resizeMode={'center'}
        />
      </View>
{/* //////////////////////////////////////////footer/////////////////////////////////////       */}
      <Animatible.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}>
{/* /////////////////////////////////////////mail/////////////////////////////////           */}
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Feather name="mail" size={20} color={'white'} />
          <TextInput
            onChangeText={(phone) => {
              setState({
                phone: phone,
              });
            }}
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType={'numeric'}
          />
        </View>
{/* ///////////////////////////////////////password////////////////////////////////////         */}
        <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} color={'white'} />
          <TextInput
            onChangeText={(pass) => {
              setState({
                password: pass,
              });
            }}
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={!state.passVisible}
          />
          <TouchableOpacity
            onPress={() =>
              setState({
                passVisible: !state.passVisible,
              })
            }>
            {!state.passVisible ? (
              <Feather name="eye-off" size={20} color={'white'} />
            ) : (
              <Feather name="eye" size={20} color={'white'} />
            )}
          </TouchableOpacity>
        </View>
{/* ////////////////////////////////confirm password///////////////////////////////// */}
        <Text style={[styles.text_footer, {marginTop: 15}]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} color={'white'} />
          <TextInput
            onChangeText={(cPass) => {
              setState({
                cPassword: cPass,
              });
            }}
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={!state.cPassVisible}
          />
          <TouchableOpacity
            onPress={() =>
              setState({
                passVisible: !state.cPassVisible,
              })
            }>
            {!state.cPassVisible ? (
              <Feather name="eye-off" size={20} color={'white'} />
            ) : (
              <Feather name="eye" size={20} color={'white'} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              backgroundColor: 'white',
              marginTop: 35,
            },
          ]}
          onPress={() => {}}>
          <Text style={[styles.textSign, {color: '#009387'}]}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {marginTop: 15}]}
          onPress={() => {NavigationService.navigate('LoginScreen2')}}>
          <LinearGradient style={styles.signIn} colors={['#08d4c4', '#01ab9d']}>
            <Text style={[styles.textSign, {color: 'white'}]}>Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatible.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#009387',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    height: 150,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: 'white',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'white',
    fontSize: 20,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
