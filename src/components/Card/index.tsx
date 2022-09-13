import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import styleClique from './styleClique';
import MyButton  from '../Button'
import MyView from '../View'
import { Audio } from 'expo-av';
import Sound from 'react-native-sound';
import Nabbar from  '../Navbar'

const App: React.FC = () => {

///export default function App() {

  //VARIAVEIS
  const [sound, setSound] = React.useState();
  const [values,setVaues]= useState( {array: [0,1, 2,3,4,5,6,7,8]})
  const [atual,setAtual] = useState()
  const [stylebt0,setStylebt0] = useState(styles)
  const [stylebt1,setStylebt1] = useState(styles)
  const [stylebt2,setStylebt2] = useState(styles)
  const [stylebt3,setStylebt3] = useState(styles)
  const [stylebt4,setStylebt4] = useState(styles)
  const [stylebt5,setStylebt5] = useState(styles)
  const [stylebt6,setStylebt6] = useState(styles)
  const [stylebt7,setStylebt7] = useState(styles)
  const [stylebt8,setStylebt8] = useState(styles)
  const  delay=2000;


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

  //PLAY AUDIO
  async function playSound0() {   
     try{         
      const {sound } = await Audio.Sound.createAsync(require('../../assets/audio/bumbo01.mp3'));        
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  + 100);    
     }catch(err){console.log(err)}
  }  
  async function playSound1() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/caixa01.mp3'))       
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  +200);
      
    }
      catch(err){console.log(err)}
  }
  async function playSound2() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/prato01.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 100);      
    }
      catch(err){console.log(err) 
      }
  }
  async function playSound3() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/bumbo02.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 100);
    }
    catch(err){}
  }
  async function playSound4() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/aro.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 100);
    }
    catch(err){}
  }
  async function playSound5() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/prato07.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 100);
    }
    catch(err){}
  }
  async function playSound6() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/prato03.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 400);
    }
    catch(err){}
  }
  async function playSound7() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/prato04.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 300);      
    }
    catch(err){}
  }
  async function playSound8() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/prato06.mp3'));         
      await sound.playAsync();
      setTimeout(() => { sound.unloadAsync();},  + 400);
    }
   
    catch(err){}
    
  }
      
  //EVENTOS
  useEffect(() => { setStylebt0(styles); return()=> {clearTimeout()}  }, [stylebt0])
  useEffect(() => { setStylebt1(styles); return()=> {clearTimeout()}  }, [stylebt1])
  useEffect(() => { setStylebt2(styles); return()=> {clearTimeout()}  }, [stylebt2])
  useEffect(() => { setStylebt3(styles); return()=> {clearTimeout()}  }, [stylebt3])
  useEffect(() => { setStylebt4(styles); return()=> {clearTimeout()}  }, [stylebt4])
  useEffect(() => { setStylebt5(styles); return()=> {clearTimeout()}  }, [stylebt5])
  useEffect(() => { setStylebt6(styles); return()=> {clearTimeout()}  }, [stylebt6])
  useEffect(() => { setStylebt7(styles); return()=> {clearTimeout()}  }, [stylebt7])
  useEffect(() => { setStylebt8(styles); return()=> {clearTimeout()}  }, [stylebt8])
 
  


  React.useEffect(() => {
    return ()=> {clearTimeout();} 
  }, [stylebt0,stylebt1,stylebt2,stylebt3,stylebt4,stylebt5,stylebt6,stylebt7,stylebt8]);


  
  return (
    <View style={styles.container} >  
    <Nabbar />
        <View style={styles.line} >
          <MyView style={stylebt0.content} onStartShouldSetResponder={bt0}>      
            {/* <MyButton value={0} onPress={bt0} style={stylebt0.Button2}  />    */}
           </MyView>          
          <MyView style={stylebt1.content} onStartShouldSetResponder={bt1}>      
            {/* <MyButton value={1} onPress={bt1} style={stylebt1.Button1} />    */}
          </MyView>
          <MyView style={stylebt2.content} onStartShouldSetResponder={bt2}>      
            {/* <MyButton value={2} onPress={bt2} style={stylebt2.Button2} />   */}
          </MyView>
         </View>

        <View style={styles.line} >
          <MyView style={stylebt3.content} onStartShouldSetResponder={bt3}>      
                {/* <MyButton value={3} onPress={bt3} style={stylebt3.Button3} />   */}
          </MyView>
          <MyView style={stylebt4.content} onStartShouldSetResponder={bt4}>
                {/* <MyButton value={4} onPress={bt4} style={stylebt4.Button4} />  */}
          </MyView>
          <MyView style={stylebt5.content} onStartShouldSetResponder={bt5}>
                {/* <MyButton value={5} onPress={bt5} style={stylebt5.Button5} />  */}
          </MyView>
        </View>

        <View style={styles.line} >
          <MyView style={stylebt6.content} onStartShouldSetResponder={bt6}>      
                {/* <MyButton value={6} onPress={bt6} style={stylebt6.Button6} />   */}
          </MyView>
          <MyView style={stylebt7.content} onStartShouldSetResponder={bt7}>
                {/* <MyButton value={7} onPress={bt7} style={stylebt7.Button7} />  */}
          </MyView>
          <MyView style={stylebt8.content} onStartShouldSetResponder={bt8}>
                {/* <MyButton value={8} onPress={bt8} style={stylebt8.Button8} />    */}
          </MyView>
        </View>      


      <StatusBar style="auto" />

    </View>
  );
}


export default App;
