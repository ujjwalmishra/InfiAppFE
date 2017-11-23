/**
 * Init ID Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

import Pin from '@containers/ui/Pin';

// Components
import { Spacer, Text,Button} from '@ui/';

/* Styles ==================================================================== */
/* Styles ==
/* Styles ==
/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.6,
    resizeMode: 'contain',
  },
  blue_arrow: {
    width:  120,
    height: 120,
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Passcode extends Component {
  static componentName = 'Passcode';

  render = () => (

    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>

    <Text style={{fontSize: 20,textAlign: 'center',color:'#000', margin: 20,fontWeight: 'bold'}}>
        Enter 4 digit Passcode
     </Text>

      

    <Spacer size={20} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal,AppStyles.container,AppStyles.containerCentered]}>
    
        <Pin />
     
      </View>

    </View>
  )
}

/* Export Component ==================================================================== */
export default Passcode;
