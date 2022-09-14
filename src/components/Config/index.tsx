import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './estilo';
import styleClique from './styleClique';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import stylePedal from './pedal';
import MyButton  from '../Button'
import MyView from '../View'
import { Audio } from 'expo-av';
import Sound from 'react-native-sound';
import Nabbar from  '../Navbar'
import Cabecalho from '../Cabecalho';

const Config: React.FC = () => {
  const { navigate } = useNavigation();
  //VARIAVEIS
  const [sound, setSound] = React.useState<Audio.Sound>();
  const [atual,setAtual] = useState()
  const [pedal, setPedal] = useState<Number>(400000)
  const [stylebt0,setStylebt0] = useState(styles)
  const [stylebt1,setStylebt1] = useState(styles)
  const [stylebt2,setStylebt2] = useState(styles)
  const [stylebt3,setStylebt3] = useState(styles)
  const [stylebt4,setStylebt4] = useState(styles)
  const [stylebt5,setStylebt5] = useState(styles)
  const [stylebt6,setStylebt6] = useState(styles)
  const [stylebt7,setStylebt7] = useState(styles)
  const [stylebt8,setStylebt8] = useState(styles)
  const [stylebt9,setStylebt9] = useState(styles)
  const [stylebt10,setStylebt10] = useState(styles)
  const [stylebt11,setStylebt11] = useState(styles)


    //PLAY AUDIO
  async function playSound0() {   
    try{    
            
      const {sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'));
      setSound(sound);        
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  + pedal);    
    }catch(err){console.log(err)}
  }  

  async function stopSound() { 
    try{     
      
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/vazio.mp3'))           
      await sound.playAsync();
      setSound(sound);    
      setTimeout(() => { sound.unloadAsync();},  +pedal);
      
    }
      catch(err){console.log(err)}
  }

  
  return (
    <View style={styles.container} > 
     {/* <Cabecalho /> 
     <Nabbar /> */}
    
       <StatusBar style="auto" />
       
       <Text style={styles.Text}>Trilha1</Text>
        <View style={styles.line} >         
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='A'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='B'/>                    
          <MyView styleText={styles.Text} style={stylebt1.content} onStartShouldSetResponder={playSound0} texto='c'/>
          <MyView styleText={styles.Text} style={stylebt2.content} onStartShouldSetResponder={playSound0} texto='D'/>  
         </View>
        <Text style={styles.Text}>Trilha2</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebt3.content} onStartShouldSetResponder={playSound0} texto='F'/>
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='G'/>  
          <MyView styleText={styles.Text} style={stylebt4.content} onStartShouldSetResponder={playSound0} texto='H'/>
          <MyView styleText={styles.Text} style={stylebt5.content} onStartShouldSetResponder={playSound0} texto='I'/>
        </View>
        <Text style={styles.Text}>Trilha3</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebt6.content} onStartShouldSetResponder={playSound0} texto='J'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='K'/>  
          <MyView styleText={styles.Text} style={stylebt7.content} onStartShouldSetResponder={playSound0} texto='L'/>
          <MyView styleText={styles.Text} style={stylebt8.content} onStartShouldSetResponder={playSound0} texto='M'/>
        </View>      
        <Text style={styles.Text}>Trilha4</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={playSound0} texto='N'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='O'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={playSound0} texto='P'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={playSound0} texto='Q'/>
        </View>   
        <Text style={styles.Text}>Trilha5</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={playSound0} texto='R'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='S'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={playSound0} texto='T'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={playSound0} texto='U'/>
        </View>  
        <Text style={styles.Text}>Trilha6</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={playSound0} texto='V'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={playSound0} texto='X'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={playSound0} texto='Y'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={playSound0} texto='Z'/>
        </View>  
        <View style={stylePedal.line} >
        <RectButton onPress={() => {navigate('Sequence')}}>
        <Image
        style={styles.Image}
        source={require('../../assets/img/config.png')}
       />
          </RectButton>   
          <RectButton onPress={() => {navigate('Sequence')}}>
        <Image
        style={styles.Image}
        source={require('../../assets/img/config.png')}
       />
          </RectButton>        
      </View>
     
    </View>
  );
}


export default Config;
