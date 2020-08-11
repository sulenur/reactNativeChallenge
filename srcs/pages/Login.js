import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import HomeScreen from "./Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* 
<TouchableOpacity  onPress={() => navigation.navigate('Home')}>   
            </TouchableOpacity>
             <Button
        title="Login"
        onPress={() => navigation.push('Home')}
            <TouchableOpacity  onPress={() => navigation.push('Home')}>   
            </TouchableOpacity>

             <TouchableOpacity  onPress={() => navigation.push('Signup')}><Text>Sign up</Text>
            </TouchableOpacity>
            */
import {Actions} from 'react-native-router-flux';

const Login =({navigation}) =>  {

  //console.warn(navigation)
  //console.warn('test') 
  return (
    <>
      <View style ={ styles.container}>
          <Logo/>
          <Form type = "Login" navigation = {navigation} props="Login"/>
          <View style= {styles.singupTextContext}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity  onPress={() => navigation.push('Signup')}><Text>Sign up</Text>
            </TouchableOpacity>
            
          </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bcaaa4',
        flex:1,
        alignItems:'center',
        justifyContent: "center",
       },
    singupTextContext:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent: "center",
        paddingVertical:16,
        flexDirection:'row',
    },
    signupText:{
        color:'#424242',
        fontSize:16
    },
    signupButton:{
        color:'#000000',
        fontSize:16,
        fontWeight:'600'

    }

});
export default Login;
