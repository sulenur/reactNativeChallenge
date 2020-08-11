import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';


const Signup = ({navigation}) => {
   
  return (
    <>
      <View style ={ styles.container}>
          <Logo/>
          <Form type="Signup" navigation = {navigation} props="Sign up"/>
          <View style={styles.singupTextContext}>
            <Text style={styles.signupText}>Already have an acoount?</Text>
            <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text style={styles.signupButton}> Sign in</Text>
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
export default Signup;
