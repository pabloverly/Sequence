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
import Cabecalho from '../Cabecalho';

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
  const [stylebt12,setStylebt12] = useState(styles)
  const [stylebt13,setStylebt13] = useState(styles)
  const [stylebt14,setStylebt14] = useState(styles)
  const [stylebt15,setStylebt15] = useState(styles)
  const [stylebt16,setStylebt16] = useState(styles)
  const [stylebt17,setStylebt17] = useState(styles)
  const [stylebt18,setStylebt18] = useState(styles)
  const [stylebt19,setStylebt19] = useState(styles)
  const [stylebt20,setStylebt20] = useState(styles)
  const [stylebt21,setStylebt21] = useState(styles)
  const [stylebt22,setStylebt22] = useState(styles)
  const [stylebt23,setStylebt23] = useState(styles)
  const [stylebt24,setStylebt24] = useState(styles)
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
  const bt12 = () =>{  playSound12(); setStylebt11(styleClique);  }
  const bt13 = () =>{  playSound13(); setStylebt11(styleClique);  }
  const bt14 = () =>{  playSound14(); setStylebt11(styleClique);  }
  const bt15 = () =>{  playSound15(); setStylebt11(styleClique);  }
  const bt16 = () =>{  playSound16(); setStylebt11(styleClique);  }
  const bt17 = () =>{  playSound17(); setStylebt11(styleClique);  }
  const bt18 = () =>{  playSound18(); setStylebt11(styleClique);  }
  const bt19 = () =>{  playSound19(); setStylebt11(styleClique);  }
  const bt20 = () =>{  playSound20(); setStylebt11(styleClique);  }
  const bt21 = () =>{  playSound21(); setStylebt11(styleClique);  }
  const bt22 = () =>{  playSound22(); setStylebt11(styleClique);  }
  const bt23 = () =>{  playSound23(); setStylebt11(styleClique);  }
  const bt24 = () =>{  playSound24(); setStylebt11(styleClique);  }

  const btoff = () =>{  stopSound()  }

 
    //PLAY AUDIO
  async function playSound0() {   
    try{    
      let url =  '../../assets/audio/Teoria.mp3';
      
      // const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      const { sound } = await Audio.Sound.createAsync(({uri:'http://simbiosecode.store:8083/a.mp3'}));  
      setSound(sound);        
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  + pedal);    
    }catch(err){console.log(err)}
  }  
  async function playSound1() { 


    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://simbiosecode.store:8083/b.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound2() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/c.mp3'}));    
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound3() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/d.mp3'}));   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound4() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/e.mp3'}));    
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound5() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/f.mp3'}));   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound6() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/f.mp3'})); 
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound7() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/h.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound8() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/i.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound9() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/j.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound10() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/h.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound11() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/l.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }
  async function playSound12() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/m.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound13() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/n.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound14() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/o.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound15() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/p.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound16() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/q.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound17() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/r.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound18() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/s.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound19() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/t.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound20() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/u.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound21() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/v.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound22() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/x.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound23() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/y.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log(err)}
  }  async function playSound24() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/z.mp3'}));  
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
     {/* <Cabecalho />  */}
     <Nabbar />
    
       <StatusBar style="auto" />
       
       <Text style={styles.Text}>Trilha1</Text>
        <View style={styles.line} >         
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='A'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt1} texto='B'/>                    
          <MyView styleText={styles.Text} style={stylebt1.content} onStartShouldSetResponder={bt2} texto='c'/>
          <MyView styleText={styles.Text} style={stylebt2.content} onStartShouldSetResponder={bt3} texto='D'/>  
         </View>
        <Text style={styles.Text}>Trilha2</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebt3.content} onStartShouldSetResponder={bt3} texto='F'/>
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='G'/>  
          <MyView styleText={styles.Text} style={stylebt4.content} onStartShouldSetResponder={bt4} texto='H'/>
          <MyView styleText={styles.Text} style={stylebt5.content} onStartShouldSetResponder={bt5} texto='I'/>
        </View>
        <Text style={styles.Text}>Trilha3</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebt6.content} onStartShouldSetResponder={bt6} texto='J'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='K'/>  
          <MyView styleText={styles.Text} style={stylebt7.content} onStartShouldSetResponder={bt7} texto='L'/>
          <MyView styleText={styles.Text} style={stylebt8.content} onStartShouldSetResponder={bt8} texto='M'/>
        </View>      
        <Text style={styles.Text}>Trilha4</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={bt9} texto='N'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='O'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={bt10} texto='P'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={bt11} texto='Q'/>
        </View>   
        <Text style={styles.Text}>Trilha5</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={bt9} texto='R'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='S'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={bt10} texto='T'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={bt11} texto='U'/>
        </View>  
        <Text style={styles.Text}>Trilha6</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebt9.content} onStartShouldSetResponder={bt9} texto='V'/> 
          <MyView styleText={styles.Text} style={stylebt0.content} onStartShouldSetResponder={bt0} texto='X'/>   
          <MyView styleText={styles.Text} style={stylebt10.content} onStartShouldSetResponder={bt10} texto='Y'/>
          <MyView styleText={styles.Text} style={stylebt11.content} onStartShouldSetResponder={bt11} texto='Z'/>
        </View>  
        <View style={stylePedal.line} >
          <MyButton value={0} onPress={btoff} style={stylePedal.Button2} texto='Stop'  textStyle={stylePedal.Text}/>  
                 
      </View>
     
    </View>
  );
}


export default Sequence;
