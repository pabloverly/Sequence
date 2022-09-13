import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',   
    justifyContent: 'center', 
   
  },
  line: {
    flexDirection: 'row' ,
     
  },
  content: {
    marginVertical: 10,
    backgroundColor: '#006400', 
    width:'25%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight:'5%',
    marginTop: '5%',
    marginLeft:'5%',
  },


  Button1:{
    marginVertical: 10,
    backgroundColor: '#DAA520',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8, 
    width:'35%', 
    marginLeft: 35,   
  },

  Button2:{
    marginVertical: 10,
    backgroundColor: '#DAA520',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,  
     width:'35%',
     marginLeft: 35,
  },

});

export default styles;