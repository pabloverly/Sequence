import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerNav: {   
    backgroundColor: '#000', 
    marginTop:20,
   
  },
  lineNav: {
    flexDirection: 'row' ,
     
  },
  Text:{
    color: '#fff',
    marginLeft:'30%',
  },
  contentNav: {
    marginVertical: 10,
    backgroundColor: '#2E8B57',
    width:'10%',
    height: 50,  
    justifyContent: 'center',
    borderRadius: 20,
    marginRight:'5%',
    marginLeft:'5%',
  },
  ButtonCircleNav:{
   
  },
  ButtonDisable:{
    marginVertical: 10,
    backgroundColor: '#556B2F',
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

export default styles;