import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
//const logoImage = require("../../assets/images/ezShop.png");
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.EzShop}>Eazy Shopping</Text>
    {/* Image Container..... */}
    <View style = {styles.imageContainer}>
      <Image 
        source={require('../../assets/images/ezShop.png')}
        style = {{
          width:100,
          height:100,
          marginBottom: 20,
          padding:50,
          alignItems:'center',
        }}
        
      />
    </View>
{/*User name input*/} 
    <TextInput
      style = {styles.uInput}
      placeholder="User Name"
      />
      
      <StatusBar style="auto"/>

{/* Password Input  */}
      <TextInput
      style = {styles.pInput}
      placeholder="Password"
      />

      {/* Button Section */}
      <View style = {styles.buttonContainer}>
        {/* Login Up */}
        <TouchableOpacity style = {styles.sinUpBtn}>
          <Text
          style = {styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
        {/* Sing Up btn */}
        <TouchableOpacity style = {styles.logInBtn}>
          <Text
          style = {styles.btnText}>Sing Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  // background 
  container: {
    marginTop: 50,
    backgroundColor:'lightblue',
    flex:1,
    alignItems:'center',
  },
// image container
  imageContainer:{
    justifyContent: 'center',
    alignItems :'center'
  },
  // image formatting
  EzShop:{
    marginTop:10,
    marginBottom:40,
    fontWeight:'bold',
    fontSize :35,
    textAlign:'center',
    margin:10,
    color:'purple',
    fontFamily:"sans-serif",
  },
// User Name Input
  uInput:{
    width:"80%",
    backgroundColor:'#fff',
    padding:10,
    marginBottom:10,
    textAlign:'center',
    fontWeight:'bold',
  },
  // Password Input 
  pInput:{
    width:"80%",
    backgroundColor:'#fff',
    padding:10,
    marginBottom:10,
    textAlign:'center',
    fontWeight:'bold',
  },
  // sing up btn
  sinUpBtn:{
    backgroundColor:'lightgreen',
    padding:15,
    width: "100%",
    marginBottom:10,
  },
  // login btn 
  logInBtn:{
    backgroundColor:'orange',
    padding:15,
    width: "100%",
  },
// button text formatting
  btnText:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold',

  },
  // btn container
  buttonContainer:{
    flexDirection: 'row',  
    width:"80%",
  },
});