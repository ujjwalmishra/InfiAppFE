/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Welcome from '@containers/newuser/WelcomeView';
import CreateForm from '@containers/auth/CreateForm';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'welcome'}>
    <Scene
      hideNavBar
      key={'welcomeScreen'}
      component={Welcome}
      type={ActionConst.RESET}
      analyticsDesc={'WelcomeScreen'}
    />
    <Scene
      {...AppConfig.navbarProps}
      hideNavBar
      key={'startID'}
      title={'Create'}
      component={CreateForm}
      analyticsDesc={'Create'}
    />
  </Scene>
);

export default scenes;
