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
import CreateForm from '@containers/auth/CreateForm';

// Components
import { Spacer, Text,Button} from '@ui/';


const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },  sizeButton:{
    width: AppSizes.screen.width*.88,
    //borderColor: '#000',
    borderWidth: 1,
    borderRadius:5,
  },
  logo: {
    width: AppSizes.screen.width * 0.72,
    resizeMode: 'contain',
  },
  blue_arrow: {
    width:  120,
    height: 120,
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';



  render = () => (

    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
    <Spacer size={30} />
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />

      <Text style={{fontSize: 25,lineHeight: 30,textAlign: 'center',color:'#000',fontWeight: 'bold'}}>
        Secure identity management {'\n'}built on blockchain
     </Text>

        <Text style={{fontSize: 17,lineHeight: 24,textAlign: 'center',color:'#000', fontFamily:'Helvetica'}}>
        {'\n'}{'\n'}
         Infinity allows you to share your identity with {'\n'}trusted Infinity parterns. We believe {'\n'}personal identity is intimate,
         which is why {'\n'}Infinity puts you, the user, in control of {'\n'}who you share your identity with.
      </Text>




      <View style={[AppStyles.row, AppStyles.paddingHorizontal,AppStyles.container,AppStyles.containerCentered]}>
      <Spacer size={20} />
      <Image
           source={require('../../images/shield.png')}
           style={[styles.blue_arrow]}
      />

        <View style={[AppStyles.flex1,styles.back]} />
          <Spacer size={35} />
        <View style={[styles.sizeButton]}>
          <Button

          color={'#000'}
          title='Create New Infinity ID'
          onPress={Actions.app}
          raised={false}
          backgroundColor={'#d6d6d6'}
          />
        </View>
      <View style={[AppStyles.flex1,styles.back]} />
      </View>
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
