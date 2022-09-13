import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerNav: {   
    backgroundColor: '#000', 
    marginTop:40,
   
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
    backgroundColor: '#FF0000',
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

export default styles;