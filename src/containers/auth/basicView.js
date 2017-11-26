/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  navigator,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation'
// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';
import basicInfCont from '@containers/auth/basicInfCont';

// Components
import { Spacer, Text,Button} from '@ui/';


cexport default class App extends Component<{}> {
  render() {
    return (


      <View style={styles.container}>

      <TextInput style={styles.input} placeholder= "Enter legal first Name"/>
       <TextInput style={styles.input} placeholder= "Enter legal last Name"/>
       <TextInput style={styles.input} placeholder= "Enter valid email"/>
       <TextInput style={styles.input} placeholder= "Enter this Devide Number"/>
       

       color={'#000'}
       title='Create New Infinity ID'
       onPress={Actions.app}
       raised={false}
       backgroundColor={'#d6d6d6'}
       />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 40,
    width: Dimensions.get('window').width*.86
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
