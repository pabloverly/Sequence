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
          <RectButton onPress={() => {navigate('Sequence'); playSound() }} style={styles.ButtonCircleNav}>
          <Text style={styles.Text}>B1</Text>
          </RectButton>
        </View>

        <View style={styles.contentNav}>
          <RectButton onPress={() => {navigate('Drum'); playSound()}} style={styles.ButtonCircleNav}>   
          <Text style={styles.Text}>B2</Text> 
          </RectButton>
        </View>

        <View style={styles.ButtonDisable}>
          <RectButton onPress={() => {navigate('Percusao'); playSound() }} style={styles.ButtonCircleNav}>  
          <Text style={styles.Text}>B3</Text>     
          </RectButton>     
        </View>

        <View style={styles.ButtonDisable} pointerEvents="none">
          <RectButton onPress={ novos} style={styles.ButtonCircleNav}>  
          <Text style={styles.Text}>B4</Text> 
          </RectButton>     
        </View>

        <View style={styles.ButtonDisable} pointerEvents="none">
          <RectButton onPress={ novos} style={styles.ButtonCircleNav}>  
          <Text style={styles.Text}>B5</Text> 
          </RectButton>     
        </View>
      </View>         

      <StatusBar style="auto" />

    </View>
  );
}


