import { StyleSheet } from 'react-native';

const stylesCabecalho = StyleSheet.create({
  containerNav: {   
    backgroundColor: '#000', 
    marginTop:2,
    display: 'flex',
    alignItems:'flex-end'
    
   
  },
  lineNav: {
    flexDirection: 'row' ,
     
  },
  Image:{
    width: 50,
    height: 50,
  },
  Text:{
    color: '#fff',
    marginLeft:'30%',
  },
  contentNav: {
    marginVertical: 10,
    // backgroundColor: '#2F4F4F',
    width:'15%',
    height: 50,  
    justifyContent: 'center',
    borderRadius: 20,
    marginRight:'1%',
    marginLeft:'1%',
  },
  ButtonCircleNav:{
   
  },
  ButtonDisable:{
    marginVertical: 10,
    backgroundColor: '#800000',
    width:'10%',
    height: 50,  
    justifyContent: 'center',
    borderRadius: 20,
    marginRight:'5%',
    marginLeft:'5%',   
  },


  okButtonTextNav: {
   color:'#FF0000'
   // fontFamily: 'Archivo_700Bold'
  },
});

export default stylesCabecalho;