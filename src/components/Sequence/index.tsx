import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './estilo';
import styleClique from './styleClique';
import stylePedal from './pedal';
import MyButton  from '../Button'
import MyView from '../View'
import { Audio } from 'expo-av';
import Sound from 'react-native-sound';
import Nabbar from  '../Navbar'

const Sequence: React.FC = () => {
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


  //ACAO BUTTON
  const bt0 = () =>{  playSound0(); setStylebt0(styleClique); }
  const bt1 = () =>{  playSound1(); setStylebt1(styleClique);  }
  const bt2 = () =>{  playSound2(); setStylebt2(styleClique);  }
  const bt3 = () =>{  playSound3(); setStylebt3(styleClique);  }
  const bt4 = () =>{  playSound4(); setStylebt4(styleClique);  }
  const bt5 = () =>{  playSound5(); setStylebt5(styleClique);  } 
  const bt6 = () =>{  playSound6(); setStylebt6(styleClique);  }
  const bt7 = () =>{  playSound7(); setStylebt7(styleClique);  }
  const bt8 = () =>{  playSound8(); setStylebt8(styleClique);  }
  const bt9 = () =>{  playSound9(); setStylebt9(styleClique);  }
  const bt10 = () =>{  playSound10(); setStylebt10(styleClique);  }
  const bt11 = () =>{  playSound11(); setStylebt11(styleClique);  }
  const btoff = () =>{  stopSound()  }

 
    //PLAY AUDIO
  async function playSound0() {   
    try{    
            
      const {sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'));
      setSound(sound);        
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  + pedal);    
    }catch(err){console.log(err)}
  }  
  async function playSound1() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria2.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound2() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound3() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound4() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound5() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound6() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound7() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound8() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound9() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound10() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound11() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
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

  //EVENTOS
  useEffect(() => { setStylebt0(styles);  }, [stylebt0])
  useEffect(() => { setStylebt1(styles);  }, [stylebt1])
  useEffect(() => { setStylebt2(styles); return()=> {clearTimeout()}  }, [stylebt2])
  useEffect(() => { setStylebt3(styles); return()=> {clearTimeout()}  }, [stylebt3])
  useEffect(() => { setStylebt4(styles); return()=> {clearTimeout()}  }, [stylebt4])
  useEffect(() => { setStylebt5(styles); return()=> {clearTimeout()}  }, [stylebt5])
  useEffect(() => { setStylebt6(styles); return()=> {clearTimeout()}  }, [stylebt6])
  useEffect(() => { setStylebt7(styles); return()=> {clearTimeout()}  }, [stylebt7])
  useEffect(() => { setStylebt8(styles); return()=> {clearTimeout()}  }, [stylebt8])
  useEffect(() => { setStylebt9(styles); return()=> {clearTimeout()}  }, [stylebt9])
  useEffect(() => { setStylebt10(styles); return()=> {clearTimeout()}  }, [stylebt10])
  useEffect(() => { setStylebt11(styles); return()=> {clearTimeout()}  }, [stylebt11])
  


  React.useEffect(() => {
    // return ()=> {clearTimeout();} 
  }, [stylebt0,stylebt1,stylebt2,stylebt3,stylebt4,stylebt5,stylebt6,stylebt7,stylebt8]);
 
  React.useEffect(() => {
    return sound
      ? () => {     
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  // async function fnPedalOn() {
  //   setPedal(4000)
  //   const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/on.mp3'));         
  //   await sound.playAsync();
  //   setTimeout(() => { sound.unloadAsync();},  + pedal); 
  // }
  // async function fnPedalOff() {
  //   setPedal(400)
  //   const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/off.mp3'));         
  //   await sound.playAsync();
  //   setTimeout(() => { sound.unloadAsync();},  + pedal); 
  // }
  async function stopAudio() {    
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/piano_D.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + pedal);      
    }
      catch(err){console.log(err) 
      }
  }
 
  
  return (
    <View style={styles.container} >  
    <Nabbar />
       <StatusBar style="auto" />
       
       <Text style={styles.Text}>Trilha1</Text>
        <View style={styles.line} >         
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='A' /> 
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt1} texto='B' />                    
          <MyView style={stylebt1.content} onStartShouldSetResponder={bt2} texto='c'/>
          <MyView style={stylebt2.content} onStartShouldSetResponder={bt3} texto='D'/>  
         </View>
        <Text style={styles.Text}>Trilha2</Text>
        <View style={styles.line} >          
          <MyView style={stylebt3.content} onStartShouldSetResponder={bt3} texto='F'/>
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='G' />  
          <MyView style={stylebt4.content} onStartShouldSetResponder={bt4} texto='H'/>
          <MyView style={stylebt5.content} onStartShouldSetResponder={bt5} texto='I'/>
        </View>
        <Text style={styles.Text}>Trilha3</Text>
        <View style={styles.line} >          
          <MyView style={stylebt6.content} onStartShouldSetResponder={bt6} texto='J'/> 
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='K' />  
          <MyView style={stylebt7.content} onStartShouldSetResponder={bt7} texto='L'/>
          <MyView style={stylebt8.content} onStartShouldSetResponder={bt8} texto='M'/>
        </View>      
        <Text style={styles.Text}>Trilha4</Text>
        <View style={styles.line} >       
          <MyView style={stylebt9.content} onStartShouldSetResponder={bt9} texto='N'/> 
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='O' />   
          <MyView style={stylebt10.content} onStartShouldSetResponder={bt10} texto='P'/>
          <MyView style={stylebt11.content} onStartShouldSetResponder={bt11} texto='Q'/>
        </View>   
        <Text style={styles.Text}>Trilha5</Text>
        <View style={styles.line} >       
          <MyView style={stylebt9.content} onStartShouldSetResponder={bt9} texto='R'/> 
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='S' />   
          <MyView style={stylebt10.content} onStartShouldSetResponder={bt10} texto='T'/>
          <MyView style={stylebt11.content} onStartShouldSetResponder={bt11} texto='U'/>
        </View>  
        <Text style={styles.Text}>Trilha6</Text>
        <View style={styles.line} >       
          <MyView style={stylebt9.content} onStartShouldSetResponder={bt9} texto='V'/> 
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0} texto='X' />   
          <MyView style={stylebt10.content} onStartShouldSetResponder={bt10} texto='Y'/>
          <MyView style={stylebt11.content} onStartShouldSetResponder={bt11} texto='Z'/>
        </View>  
        <View style={stylePedal.line} >
          <MyButton value={0} onPress={btoff} style={stylePedal.Button2} texto='Stop'  textStyle={stylePedal.Text}/>
      </View>

    </View>
  );
}


export default Sequence;
