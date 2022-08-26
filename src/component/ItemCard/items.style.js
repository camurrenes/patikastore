import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    height: Dimensions.get('window').height / 2,
  }, 
  image_container:{
    margin:10,
    backgroundColor:'white',
    borderRadius:20
  },
  image: {
    backgroundColor:'white',
    margin:10,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    
  },
  title:{
    marginLeft:20,
    fontSize:25,
    fontWeight: 'bold',
  },
  price:{
    marginLeft:20,
    marginBottom:10,
    marginTop:10,
    fontSize:20,
  },
  text:{
    color:'red',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:20,
  },
 
});
