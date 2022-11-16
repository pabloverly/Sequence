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

const SequenceB3: React.FC = () => {
  //VARIAVEIS
  const [sound, setSound] = React.useState<Audio.Sound>();
  //const [atual,setAtual] = useState()
  const [pedal, setPedal] = useState<Number>(400000)

  const [stylebtA,setStylebtA] = useState(styles)
  const [stylebtB,setStylebtB] = useState(styles)
  const [stylebtC,setStylebtC] = useState(styles)
  const [stylebtD,setStylebtD] = useState(styles)
  const [stylebtE,setStylebtE] = useState(styles)
  const [stylebtF,setStylebtF] = useState(styles)
  const [stylebtG,setStylebtG] = useState(styles)
  const [stylebtH,setStylebtH] = useState(styles)
  const [stylebtI,setStylebtI] = useState(styles)
  const [stylebtJ,setStylebtJ] = useState(styles)
  const [stylebtK,setStylebtK] = useState(styles)
  const [stylebtL,setStylebtL] = useState(styles)
  const [stylebtM,setStylebtM] = useState(styles)
  const [stylebtN,setStylebtN] = useState(styles)
  const [stylebtO,setStylebtO] = useState(styles)
  const [stylebtP,setStylebtP] = useState(styles)
  const [stylebtQ,setStylebtQ] = useState(styles)
  const [stylebtR,setStylebtR] = useState(styles)
  const [stylebtS,setStylebtS] = useState(styles)
  const [stylebtT,setStylebtT] = useState(styles)
  const [stylebtU,setStylebtU] = useState(styles)
  const [stylebtV,setStylebtV] = useState(styles)
  const [stylebtX,setStylebtX] = useState(styles)
  const [stylebtZ,setStylebtZ] = useState(styles)
 
  //ACAO BUTTON
  const btA = () =>{  playSoundA(); setStylebtA(styleClique); }
  const btB = () =>{  playSoundB(); setStylebtB(styleClique);  }
  const btC = () =>{  playSoundC(); setStylebtC(styleClique);  }
  const btD = () =>{  playSoundD(); setStylebtD(styleClique);  }
  const btE = () =>{  playSoundE(); setStylebtE(styleClique);  }
  const btF = () =>{  playSoundF(); setStylebtF(styleClique);  } 
  const btG = () =>{  playSoundG(); setStylebtG(styleClique);  }
  const btH = () =>{  playSoundH(); setStylebtH(styleClique);  }
  const btI = () =>{  playSoundI(); setStylebtI(styleClique);  }
  const btJ = () =>{  playSoundJ(); setStylebtJ(styleClique);  }
  const btK = () =>{  playSoundK(); setStylebtK(styleClique);  }
  const btL = () =>{  playSoundL(); setStylebtL(styleClique);  }
  const btM = () =>{  playSoundM(); setStylebtM(styleClique);  }
  const btN = () =>{  playSoundN(); setStylebtN(styleClique);  }
  const btO = () =>{  playSoundO(); setStylebtO(styleClique);  }
  const btP = () =>{  playSoundP(); setStylebtP(styleClique);  }
  const btQ = () =>{  playSoundQ(); setStylebtQ(styleClique);  }
  const btR = () =>{  playSoundR(); setStylebtR(styleClique);  }
  const btS = () =>{  playSoundS(); setStylebtS(styleClique);  }
  const btT = () =>{  playSoundT(); setStylebtT(styleClique);  }
  const btU = () =>{  playSoundU(); setStylebtU(styleClique);  }
  const btV = () =>{  playSoundV(); setStylebtV(styleClique);  }
  const btX = () =>{  playSoundX(); setStylebtX(styleClique);  }
  const btZ = () =>{  playSoundZ(); setStylebtZ(styleClique);  }

  const btoff = () =>{  stopSound()  }

 
    //PLAY AUDIO
  async function playSoundA() {   
    try{    
      let url =  '../../assets/audio/Teoria.mp3';
      
      // const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/Teoria.mp3'))   
      const { sound } = await Audio.Sound.createAsync(({uri:'http://simbiosecode.store:8083/a.mp3'}));  
      setSound(sound);        
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  + pedal);    
    }catch(err){console.log("Erro PlayA.:" + err)}
  }  
  async function playSoundB() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://simbiosecode.store:8083/b.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      // setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayB.:" + err)}
  }
  async function playSoundC() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/c.mp3'}));    
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayC.:" + err)}
  }
  async function playSoundD() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/d.mp3'}));   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayD.:" + err)}
  }
  async function playSoundE() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/e.mp3'}));    
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayE.:" + err)}
  }
  async function playSoundF() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/f.mp3'}));   
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayF.:" + err)}
  }
  async function playSoundG() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/g.mp3'})); 
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayG.:" + err)}
  }
  async function playSoundH() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/h.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayH.:" + err)}
  }
  async function playSoundI() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/i.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayI.:" + err)}
  }
  async function playSoundJ() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/j.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayJ.:" + err)}
  }
  async function playSoundK() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/k.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayK.:" + err)}
  }
  async function playSoundL() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/l.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayL.:" + err)}
  }
  async function playSoundM() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/m.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayM.:" + err)}
  }  
  async function playSoundN() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/n.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayN.:" + err)}
  }  
  async function playSoundO() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/o.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayO.:" + err)}
  }  
  async function playSoundP() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/p.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayP.:" + err)}
  }  
  async function playSoundQ() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/q.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayQ.:" + err)}
  }  
  async function playSoundR() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/r.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayR.:" + err)}
  }  
  async function playSoundS() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/s.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayS.:" + err)}
  }  
  async function playSoundT() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/t.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayT.:" + err)}
  } 
   async function playSoundU() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/u.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayU.:" + err)}
  }  
  async function playSoundV() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/v.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayV.:" + err)}
  }  
  async function playSoundX() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/x.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayX" + err)}
  }  
  async function playSoundZ() { 
    try{
      const { sound } = await Audio.Sound.createAsync(({uri:'http://192.168.1.65:8081/Z.mp3'}));  
      setSound(sound);   
      await sound.playAsync(); 
      setTimeout(() => { sound.unloadAsync();},  +pedal);     
    }
      catch(err){console.log("Erro PlayZ" + err)}
  }  

  async function stopSound() { 
    try{     
      
      const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/vazio.mp3'))           
      await sound.playAsync();
      setSound(sound);    
      setTimeout(() => { sound.unloadAsync();},  +pedal);
      
    }
      catch(err){console.log("Erro Play Stop" + err)}
  }

  //EVENTOS
  useEffect(() => { setStylebtA(styles);  }, [stylebtA])
  useEffect(() => { setStylebtB(styles);  }, [stylebtB])
  useEffect(() => { setStylebtC(styles); return()=> {clearTimeout()}  }, [stylebtC])
  useEffect(() => { setStylebtD(styles); return()=> {clearTimeout()}  }, [stylebtD])
  useEffect(() => { setStylebtE(styles); return()=> {clearTimeout()}  }, [stylebtE])
  useEffect(() => { setStylebtF(styles); return()=> {clearTimeout()}  }, [stylebtF])
  useEffect(() => { setStylebtG(styles); return()=> {clearTimeout()}  }, [stylebtG])
  useEffect(() => { setStylebtH(styles); return()=> {clearTimeout()}  }, [stylebtH])
  useEffect(() => { setStylebtI(styles); return()=> {clearTimeout()}  }, [stylebtI])
  useEffect(() => { setStylebtJ(styles); return()=> {clearTimeout()}  }, [stylebtJ])
  useEffect(() => { setStylebtK(styles); return()=> {clearTimeout()}  }, [stylebtK])
  useEffect(() => { setStylebtL(styles); return()=> {clearTimeout()}  }, [stylebtL])
  useEffect(() => { setStylebtM(styles); return()=> {clearTimeout()}  }, [stylebtM])
  useEffect(() => { setStylebtN(styles); return()=> {clearTimeout()}  }, [stylebtN])
  useEffect(() => { setStylebtO(styles); return()=> {clearTimeout()}  }, [stylebtO])
  useEffect(() => { setStylebtP(styles); return()=> {clearTimeout()}  }, [stylebtP])
  useEffect(() => { setStylebtQ(styles); return()=> {clearTimeout()}  }, [stylebtQ])
  useEffect(() => { setStylebtR(styles); return()=> {clearTimeout()}  }, [stylebtR])
  useEffect(() => { setStylebtS(styles); return()=> {clearTimeout()}  }, [stylebtS])
  useEffect(() => { setStylebtT(styles); return()=> {clearTimeout()}  }, [stylebtT])
  useEffect(() => { setStylebtU(styles); return()=> {clearTimeout()}  }, [stylebtU])
  useEffect(() => { setStylebtV(styles); return()=> {clearTimeout()}  }, [stylebtV])
  useEffect(() => { setStylebtX(styles); return()=> {clearTimeout()}  }, [stylebtX])
  useEffect(() => { setStylebtZ(styles); return()=> {clearTimeout()}  }, [stylebtZ])


 
 
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
      catch(err){console.log("Erro Play" + err) 
      }
  }
 
  
  return (
    <View style={styles.container} > 
     {/* <Cabecalho />  */}
     <Nabbar />
    
       <StatusBar style="auto" />
       
       <Text style={styles.Text}>Trilha1</Text>
        <View style={styles.line} >         
          <MyView styleText={styles.Text} style={stylebtA.content} onStartShouldSetResponder={btA} texto='A'/> 
          <MyView styleText={styles.Text} style={stylebtB.content} onStartShouldSetResponder={btB} texto='B'/>                    
          <MyView styleText={styles.Text} style={stylebtC.content} onStartShouldSetResponder={btC} texto='c'/>
          <MyView styleText={styles.Text} style={stylebtD.content} onStartShouldSetResponder={btD} texto='D'/>  
         </View>
        <Text style={styles.Text}>Trilha2</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebtE.content} onStartShouldSetResponder={btE} texto='E'/>
          <MyView styleText={styles.Text} style={stylebtF.content} onStartShouldSetResponder={btF} texto='F'/>  
          <MyView styleText={styles.Text} style={stylebtG.content} onStartShouldSetResponder={btG} texto='G'/>
          <MyView styleText={styles.Text} style={stylebtH.content} onStartShouldSetResponder={btH} texto='H'/>
        </View>
        <Text style={styles.Text}>Trilha3</Text>
        <View style={styles.line} >          
          <MyView styleText={styles.Text} style={stylebtI.content} onStartShouldSetResponder={btI} texto='I'/> 
          <MyView styleText={styles.Text} style={stylebtJ.content} onStartShouldSetResponder={btJ} texto='J'/>  
          <MyView styleText={styles.Text} style={stylebtK.content} onStartShouldSetResponder={btK} texto='K'/>
          <MyView styleText={styles.Text} style={stylebtL.content} onStartShouldSetResponder={btL} texto='L'/>
        </View>      
        <Text style={styles.Text}>Trilha4</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebtM.content} onStartShouldSetResponder={btM} texto='M'/> 
          <MyView styleText={styles.Text} style={stylebtN.content} onStartShouldSetResponder={btN} texto='N'/>   
          <MyView styleText={styles.Text} style={stylebtO.content} onStartShouldSetResponder={btO} texto='O'/>
          <MyView styleText={styles.Text} style={stylebtP.content} onStartShouldSetResponder={btP} texto='P'/>
        </View>   
        <Text style={styles.Text}>Trilha5</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebtQ.content} onStartShouldSetResponder={btQ} texto='Q'/> 
          <MyView styleText={styles.Text} style={stylebtR.content} onStartShouldSetResponder={btR} texto='R'/>   
          <MyView styleText={styles.Text} style={stylebtS.content} onStartShouldSetResponder={btS} texto='S'/>
          <MyView styleText={styles.Text} style={stylebtT.content} onStartShouldSetResponder={btT} texto='T'/>
        </View>  
        <Text style={styles.Text}>Trilha6</Text>
        <View style={styles.line} >       
          <MyView styleText={styles.Text} style={stylebtU.content} onStartShouldSetResponder={btU} texto='U'/> 
          <MyView styleText={styles.Text} style={stylebtV.content} onStartShouldSetResponder={btV} texto='V'/>   
          <MyView styleText={styles.Text} style={stylebtX.content} onStartShouldSetResponder={btX} texto='X'/>
          <MyView styleText={styles.Text} style={stylebtZ.content} onStartShouldSetResponder={btZ} texto='Z'/>
        </View>  
        <View style={stylePedal.line} >
          <MyButton value={0} onPress={btoff} style={stylePedal.Button2} texto='Stop'  textStyle={stylePedal.Text}/>  
                 
      </View>
     
    </View>
  );
}


export default SequenceB3;
