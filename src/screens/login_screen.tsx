import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {createState} from '../utils';
import { NavigationService } from '../services';
// Props
interface LoginScreenProps {}

// LoginScreen Component
export default ({}: LoginScreenProps) => {
  const {state, setState} = createState<{
    phoneNo?: String;
    password?: String;
  }>({
    phoneNo: '',
    password: '',
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="green" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/leaf_logo.png')}
          resizeMode="center"
        />

        <View style={[styles.textContainer, {marginTop: 40}]}>
          <Icon
            style={{alignSelf: 'center', padding: 10}}
            name="smartphone"
            size={35}
            color={'gray'}
          />
          <TextInput
            style={styles.inputtext}
            keyboardType={'numeric'}
            onChangeText={(phone) =>
              setState({
                phoneNo: phone,
              })
            }
          />
        </View>

        <View style={styles.textContainer}>
          <Icon
            style={{alignSelf: 'center', padding: 10}}
            name="vpn-key"
            size={35}
            color={'gray'}
          />
          <TextInput
            style={styles.inputtext}
            underlineColorAndroid="transparent"
            onChangeText={(pass) =>
              setState({
                password: pass,
              })
            }
          />
        </View>
      </View>
     <View style={styles.container2}>
     <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
     <View style={{flexDirection:'row', alignSelf:'center', marginTop:10}}>
     <Text>Don't have an account? </Text>
     <Text style={{color:'green', fontWeight:'bold'}} onPress={()=> NavigationService.navigate('RegisterScreen')} > Register</Text>
     </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 150,
  },
  textContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: '85%',
    marginTop: 20,
    flexDirection: 'row',
  },
  inputtext: {
    fontSize: 20,
    flex: 1,
  },
  loginBtn: {
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'green',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  container2: {
    flex: 0.15,
    backgroundColor:'white',
    padding:20,
  },
  text: {

  }
});
