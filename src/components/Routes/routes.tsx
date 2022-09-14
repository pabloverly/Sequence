import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Piano from '../Piano';
import Drum from '../Card';
import Config from '../Config';
import Percusao from '../Percusao';
import Sequence from '../Sequence';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Sequence" component={Sequence} />
        <Screen name="Config" component={Config} />
        <Screen name="Drum" component={Drum} />
        <Screen name="Percusao" component={Percusao} />      
         
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;