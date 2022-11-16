import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Piano from '../Piano';
import Drum from '../Card';
import Config from '../Config';
import Percusao from '../Percusao';
import SequenceB1 from '../SequenceB1';
import SequenceB2 from '../SequenceB2';
import SequenceB3 from '../SequenceB3';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SequenceB1" component={SequenceB1} />
        <Screen name="SequenceB2" component={SequenceB2} />
        <Screen name="SequenceB3" component={SequenceB3} />
        <Screen name="Percusao" component={Percusao} />      
         
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;