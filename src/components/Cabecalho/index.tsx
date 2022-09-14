import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import stylesCabecalho from './style';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function Cabecalho() {
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
    <View style={stylesCabecalho.containerNav} >
      
      <View style={stylesCabecalho.lineNav} >     

        <View style={stylesCabecalho.contentNav}>
          <RectButton onPress={() => {navigate('Config'); playSound()}} style={stylesCabecalho.ButtonCircleNav}>   
          <Image
         style={stylesCabecalho.Image}
        source={require('../../assets/img/config.png')}
      />
          </RectButton>
        </View>
      </View>         

      <StatusBar style="auto" />

    </View>
  );
}


