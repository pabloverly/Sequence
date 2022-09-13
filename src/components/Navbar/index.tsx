import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function Navbar() {
  const { navigate } = useNavigation();
  const { goBack } = useNavigation();
  const novos =()=>{
    alert('Em desenvolvimento')
  } 
  async function playSound() {   
    try{         
     const {sound } = await Audio.Sound.createAsync(require('../../assets/audio/clique.mp3'));        
     await sound.playAsync(); 
     setTimeout(() => { sound.unloadAsync();},  + 800);    
    }catch(err){console.log(err)}
 }  
  return (
    <View style={styles.containerNav} >

      <View style={styles.lineNav} >
        <View style={styles.contentNav}>      
          <RectButton onPress={() => {navigate('Piano'); playSound() }} style={styles.ButtonCircleNav}>
          <Text style={styles.okButtonTextNav}>Voltar</Text>
          </RectButton>
        </View>

        <View style={styles.contentNav}>
          <RectButton onPress={() => {navigate('Drum'); playSound()}} style={styles.ButtonCircleNav}>   
          <Text style={styles.okButtonTextNav}>valor</Text>     
          </RectButton>
        </View>

        <View style={styles.contentNav}>
          <RectButton onPress={() => {navigate('Percusao'); playSound() }} style={styles.ButtonCircleNav}>  
          <Text style={styles.okButtonTextNav}>Voltar</Text>     
          </RectButton>     
        </View>

        <View style={styles.ButtonDisable} pointerEvents="none">
          <RectButton onPress={ novos} style={styles.ButtonCircleNav}>  
          </RectButton>     
        </View>

        <View style={styles.ButtonDisable} pointerEvents="none">
          <RectButton onPress={ novos} style={styles.ButtonCircleNav}>  
          </RectButton>     
        </View>
      </View>         

      <StatusBar style="auto" />

    </View>
  );
}


