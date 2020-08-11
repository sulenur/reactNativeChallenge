import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

/*const Stack = createStackNavigator();

import Login from './pages/Login';
import Signup from './pages/Signup';


function HomeScreen() {
    return (
      <View style= {styles.homeScreenText}>
        <Text></Text>
      </View>
    );
  }*/
const Routers =() => {
       return (
        <>
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key ="login" component={Login} title= "Login"></Scene>
                <Scene key ="signup" component={Signup} title= "Signup"></Scene>
            </Stack>
        </Router>
        </>
       )
       /*return(
           <>
           <NavigationContainer>
               <Stack.Navigator>
                   <Stack.Screen name= "Login" componet={homeScreen}/>
               </Stack.Navigator>
           </NavigationContainer>
           </>
       )*/
    }

    const styles = StyleSheet.create({
        homeScreenText:{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
        }
    })

export default Routers;