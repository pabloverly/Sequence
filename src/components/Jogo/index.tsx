import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import styleClique from './styleClique';
import MyButton  from '../Button'
import { Audio } from 'expo-av';

export default function App() {

  //VARIAVEIS
  const [sound, setSound] = React.useState();
  const [values,setVaues]= useState( {array: [0,1, 2,3,4,5,6,7,8]})
  const [atual,setAtual] = useState()
  const [validabt,setValidabt] = useState(false)
  const [stylebt0,setStylebt0] = useState(styles)
  const [stylebt1,setStylebt1] = useState(styles)
  const [stylebt2,setStylebt2] = useState(styles)
  const [stylebt3,setStylebt3] = useState(styles)
  const [stylebt4,setStylebt4] = useState(styles)
  const [stylebt5,setStylebt5] = useState(styles)
  const [stylebt6,setStylebt6] = useState(styles)
  const [stylebt7,setStylebt7] = useState(styles)
  const [stylebt8,setStylebt8] = useState(styles)
  const [numero_aleatorio, setNumero_aleatorio] = useState(Number)
  const  delay=2000;

  //ACAO BUTTON
  const bt0 = () =>{  if(validabt == false) {setStylebt0(styleClique); playSound0();   setValidabt(true);  if (numero_aleatorio == 0) {maquina();} else{ rodar(); }}}
  const bt1 = () =>{  if(validabt == false) {setStylebt1(styleClique); playSound1();   setValidabt(true);  if (numero_aleatorio == 1) {maquina();} else{ rodar(); }}}
  const bt2 = () =>{  if(validabt == false) {setStylebt2(styleClique); playSound2();   setValidabt(true);  if (numero_aleatorio == 2) {maquina();} else{ rodar(); }}}
  const bt3 = () =>{  if(validabt == false) {setStylebt3(styleClique); playSound3();   setValidabt(true);  if (numero_aleatorio == 3) {maquina();} else{ rodar(); }}}
  const bt4 = () =>{  if(validabt == false) {setStylebt4(styleClique); playSound4();   setValidabt(true);  if (numero_aleatorio == 4) {maquina();} else{ rodar(); }}}
  const bt5 = () =>{  if(validabt == false) {setStylebt5(styleClique); playSound5();   setValidabt(true);  if (numero_aleatorio == 5) {maquina();} else{ rodar(); }}}
  const bt6 = () =>{  if(validabt == false) {setStylebt6(styleClique); playSound6();   setValidabt(true);  if (numero_aleatorio == 6) {maquina();} else{ rodar(); }}}
  const bt7 = () =>{  if(validabt == false) {setStylebt7(styleClique); playSound7();   setValidabt(true);  if (numero_aleatorio == 7) {maquina();} else{ rodar(); }}}
  const bt8 = () =>{  if(validabt == false) {setStylebt8(styleClique); playSound8();   setValidabt(true);  if (numero_aleatorio == 8) {maquina();} else{ rodar(); }}}

  //PLAY AUDIO
  async function playSound0() {   
     try{         
      const { sound } = await Audio.Sound.createAsync(require('./0.mp3'));   
      setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();     
     }catch(err){console.log(err)}
  }  
  async function playSound1() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./1.mp3')); 
      setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
      catch(err){console.log(err)}
  }
  async function playSound2() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./2.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
      catch(err){console.log(err)}
  }
  async function playSound3() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./3.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
  async function playSound4() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./0.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
  async function playSound5() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./1.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
  async function playSound6() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./1.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
  async function playSound7() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./3.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
  async function playSound8() { 
    try{
      const { sound } = await Audio.Sound.createAsync(require('./0.mp3')); 
         setTimeout(() => { sound.unloadAsync();},  + 1000);
      await sound.playAsync();}
    catch(err){}
  }
      
  //EVENTOS
  useEffect(() => { setStylebt0(styles);  }, [stylebt0])
  useEffect(() => { setStylebt1(styles);  }, [stylebt1])
  useEffect(() => { setStylebt2(styles);  }, [stylebt2])
  useEffect(() => { setStylebt3(styles);  }, [stylebt3])
  useEffect(() => { setStylebt4(styles);  }, [stylebt4])
  useEffect(() => { setStylebt5(styles);  }, [stylebt5])
  useEffect(() => { setStylebt6(styles);  }, [stylebt6])
  useEffect(() => { setStylebt7(styles);  }, [stylebt7])
  useEffect(() => { setStylebt8(styles);  }, [stylebt8])
 
  //RANDOMIZAR
  const aleatorio = ()  =>{         
    setNumero_aleatorio(Math.floor(Math.random() * 8))   
  }
  
  const rodar =() =>{
    setTimeout(function(){ 
      if(numero_aleatorio == 0){
        playSound0(); 
        setTimeout (() => {setStylebt0(styleClique)});  
        setValidabt(false);        
      }
      else if(numero_aleatorio == 1){
        playSound1(); 
        setTimeout (() => {setStylebt1(styleClique)}); 
        setValidabt(false);  
      }
      else if(numero_aleatorio == 2){
        playSound2(); 
        setTimeout (() => {setStylebt2(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 3){
        playSound3(); 
        setTimeout (() => {setStylebt3(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 4){
        playSound4(); 
        setTimeout (() => {setStylebt4(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 5){
        playSound5(); 
        setTimeout (() => {setStylebt5(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 6){
        playSound6();
        setTimeout (() => {setStylebt6(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 7){
        playSound7(); 
        setTimeout (() => {setStylebt7(styleClique)}); 
        setValidabt(false);  
      }
      else  if(numero_aleatorio == 8){
        playSound8(); 
        setTimeout (() => {setStylebt8(styleClique)}); 
        setValidabt(false);  
      }
      else (alert('erro'))
    },delay);
    // setTimeout( function(){alert(numero_aleatorio) },4000);
  }

const maquina =  () =>{
  aleatorio();  
  setTimeout( function(){rodar(); },1000);
}
  try{
  useEffect(() => {  maquina(); alert(numero_aleatorio)}, [])
  } catch(err){}

  
  return (
    <View style={styles.container} >  
    
        <View style={styles.line} >
          <View style={stylebt0.content}>      
            <MyButton value={0} onPress={bt0} style={stylebt0.Button2}  />  
           </View>          
          <View style={stylebt1.content}>      
            <MyButton value={1} onPress={bt1} style={stylebt1.Button1} />   
          </View>
          <View style={stylebt2.content}>      
            <MyButton value={2} onPress={bt2} style={stylebt2.Button2} />  
          </View>
         </View>

        <View style={styles.line} >
          <View style={stylebt3.content}>      
                <MyButton value={3} onPress={bt3} style={stylebt3.Button3} />  
          </View>
          <View style={stylebt4.content}>
                <MyButton value={4} onPress={bt4} style={stylebt4.Button4} /> 
          </View>
          <View style={stylebt5.content}>
                <MyButton value={5} onPress={bt5} style={stylebt5.Button5} /> 
          </View>
        </View>

        <View style={styles.line} >
          <View style={stylebt6.content}>      
                <MyButton value={6} onPress={bt6} style={stylebt6.Button6} />  
          </View>
          <View style={stylebt7.content}>
                <MyButton value={7} onPress={bt7} style={stylebt7.Button7} /> 
          </View>
          <View style={stylebt8.content}>
                <MyButton value={8} onPress={bt8} style={stylebt8.Button8} />   
          </View>
        </View>      

      <StatusBar style="auto" />

    </View>
  );
}


