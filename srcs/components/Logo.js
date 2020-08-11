import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

const Logo =() => {
    return (
      <>
        <View style={styles.container}>
        <Image style={styles.tinyLogo}
        source={require('../images/movie.png')}/>
        <Text style={styles.logoText}>...Welcome...</Text>
        </View>
      </>
    );
  };
  const styles = StyleSheet.create({
    tinyLogo:{
        width:70,
        height:90
       },
    container:{
        flexGrow:1,
        justifyContent: "flex-end", 
        alignItems:'center',
       },
    logoText:{
        fontSize: 18,
        marginVertical:15,
        color:'#000000'
    }
    //'rgba(255,255,255,0.7)'
});
  export default Logo;