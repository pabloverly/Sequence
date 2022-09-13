import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import styles from './style';
import Card from './src/components/Card'
import Nabbar from './src/components/Navbar'
import Piano from './src/components/Piano'
import Perc from './src/components/Percusao'
import Router from './src/components/Routes/routes'

export default function App() {
  return (    
    <View style={styles.containerApp} >
         {/* <Nabbar /> */}
      <Router />
   
      <StatusBar style="auto" />

    </View>
  );
}


