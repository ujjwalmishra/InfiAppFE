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
class CreateForm extends Component {
  static componentName = 'CreateForm';

  render = () => (

    <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>

      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />

      <Text style={{fontSize: 20,textAlign: 'center',color:'#000', margin: 20,fontWeight: 'bold'}}>
        Secure identity management built on blockchain
     </Text>

        <Text style={{fontSize: 18,textAlign: 'center',color:'#000', margin: 20, fontFamily:'Cochin'}}>
         Second page
      </Text>


<Spacer size={50} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal,AppStyles.container,AppStyles.containerCentered]}>
  
        <View style={[AppStyles.flex1]} />
          <Spacer size={35} />
        <View style={[AppStyles.flex6]}>
          <Button
          color={'#000'}
          title='Create New Infinity ID'
          onPress={Actions.app}
          raised={false}
          backgroundColor={'#d6d6d6'}
          />

        </View>
          <Spacer size={15} />
        <View style={[AppStyles.flex6]}>
          <Button
          color={'#000'}
          title='Create New Infinity ID'
          onPress={Actions.app}
          raised={false}
          backgroundColor={'#d6d6d6'}
          />

        </View>
        <View style={[AppStyles.flex1]} />
      </View>

    </View>
  )
}

/* Export Component ==================================================================== */
export default CreateForm;
