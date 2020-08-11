import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../pages/Login";

const Form =({navigation, props})  => {
 
//console.warn(navigation);
 /*<TouchableOpacity style={styles.button}>
            <Text style= {styles.buttonText}>{props}</Text>  
            <Button
            title="Login"
        onPress={() => navigation.push('Home')}
      />
        </TouchableOpacity> */
 //console.warn(props)
    return (
      <>
        <View style={styles.container}>
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor="#000000"
            selectionColour='#fff'
            keyboardType="email-address"
            //onSubmitEditing={()=>this.password.focus()}
            />
        <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#000000" // #000000
            //ref ={(input)=>this.password = input}
            />
        <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.button} >
            <Text style= {styles.buttonText}>{props}</Text>  
        </TouchableOpacity>
        
        
        </View>
      </>
    );
  };


  const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: "center",
        alignItems:'center',
       },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:16,
        color:'#424242',
        marginVertical:12
        
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000',
        textAlign:'center'
    },
    button:{
        backgroundColor:'#8c7b75',
        marginVertical:12,
        borderRadius:25,
        width:150,
        paddingVertical:12

    }
   
});
  export default Form;