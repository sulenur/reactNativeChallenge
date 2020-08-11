import React, { Component ,useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Image,
    TouchableHighlight
  } from 'react-native';

  const Detail =({route}) =>  {
 
  
  
const {otherParams} =route.params;
const data = otherParams.listItem;
//console.warn(data)
    return (
        <>  
        <View style={ styles.container}>
        <Image  source={data.icon} style={{ width: 200, height: 200 }} />
            <Text style={styles.titleText}>{data.title}</Text> 
            <Text style={styles.descprictionText}>{data.description}</Text> 
            <Text>Director: {data.Director}</Text>
            <Text>Writers: {data.Writers}</Text>
            <Text>Stars: {data.Stars}</Text>
        </View>
         </>
        )
  }
  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bcaaa4',
        flex:1,
        alignItems:'center',
        justifyContent: "center",
       },
    descprictionText:{
        paddingVertical:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "center",
    },
    titleText:{
        color:'#424242',
        fontSize:20,
        paddingVertical:16,
        
        
    },
    

});
  export default Detail;