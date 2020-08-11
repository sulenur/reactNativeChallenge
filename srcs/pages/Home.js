import React, { Component ,useState, Fragment} from "react";
import FilmContextProvider from "../context/FilmsContext";
import axios from "axios";
import { apiKey } from "../api/config";
import Test from "../images/thelma.png"


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


const Home =({navigation}) =>  {
    // Prevent page reload, clear input, set URL and push history on submit
    /*const handleSubmit = (e, history, searchInput) => {
      e.preventDefault();
      e.currentTarget.reset();
      let url = `/search/${searchInput}`;
      history.push(url);
    }; */

    const [name, setName] = useState("")
    const filterList=(list)=> {
      return data.filter(
        (listItem) =>
          listItem.title
            .toLowerCase()
            .includes(name.toLowerCase()),
      );
    }

    const data =[
      {title:"The Green Mile", icon: require('../images/greenMile.png'), 
        description:"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        Director:"Frank Darabont", Writers:"Stephen King, Frank Darabont",
        Stars:"Tom Hanks, Michael Clarke Duncan, David Morse ",
        Rate:"8.6"},
      {title:"Avengers: Endgame", icon: require('../images/avengers.png'),
        description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        Director:"Anthony Russo, Joe Russo", Writers:"Christopher Markus , Stephen McFeely ",
        Stars:"Robert Downey Jr., Chris Evans, Mark Ruffalo ",
        Rate:"8.4"},
      {title:"parasite", icon: require('../images/parasite.png'),
        description:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        Director:"Bong Joon Ho", Writers:"Bong Joon Ho",
        Stars:"Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo  ",
        Rate:"8.6"},
      {title:"Gilda", icon: require('../images/gilda.png'),
        description:"A small-time gambler hired to work in a Buenos Aires casino discovers his employer's new wife is his former lover.",
        Director:"Charles Vidor", Writers:"E.A. Ellington, Jo Eisinger ",
        Stars:"Rita Hayworth, Glenn Ford, George Macready ",
        Rate:"7.7"},
      {title:"Thelma & Louise", icon: require('../images/thelma.png'),
        description:"Two best friends set out on an adventure, but it soon turns around to a terrifying escape from being hunted by the police, as these two girls escape for the crimes they committed.",
        Director:"Ridley Scott", Writers:"Callie Khouri",
        Stars:"Susan Sarandon, Geena Davis, Harvey Keitel  ",
        Rate:"7.5"},
      {title:"Lord of the Rings:The Two Towers", icon: require('../images/rings.png'),
        description:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        Director:"Peter Jackson", Writers:"J.R.R. Tolkien (novel), Fran Walsh (screenplay)",
        Stars:"Elijah Wood, Ian McKellen, Orlando Bloom ",
        Rate:"8.7"},
      {title:"Harry Potter and Deathly Hallows", icon: require('../images/potter.png'),
        description:"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        Director:"David Yates", Writers:"Steve Kloves (screenplay), J.K. Rowling (novel)",
        Stars:"Daniel Radcliffe, Emma Watson, Rupert Grint ",
        Rate:"8.1"},
      {title:"12 angry man", icon: require('../images/angryMan.png'),
        description:"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        Director:"Sidney Lumet", Writers:" Reginald Rose (story), Reginald Rose (screenplay)",
        Stars:"Henry Fonda, Lee J. Cobb, Martin Balsam  ",
        Rate:"8.9"}
     
    ]
    
    
      const ListItems = data.map((item) =>
      <>
        <Text>{item.title}</Text>
        
      </>
      );
      const MyComponent=({props}) =>{
        //console.warn(props)
        return (
          <>
          <View style ={styles.rowStyle}>   
            <Image  source={props.icon} style={{ width: 80, height: 80 }} />
            <Text> {props.title}</Text>
          </View>
          </>
        );
      }
  

     

    return (
        <>       
          <View style ={ styles.container}> 
           <ScrollView>
            <TextInput 
            onChangeText={text => setName(text)}
            value={name}
            placeholder="enter here.."
            style={styles.searchText}
          />
          {filterList(data).map((listItem, index) => (
            <TouchableHighlight key={index} onPress={()=>navigation.push('Description',{
              itemId: index,
              otherParams: {listItem}
            })}>
              <MyComponent props={listItem}/>
          </TouchableHighlight>
        ))}
         </ScrollView>
          </View>
        </>
      );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bcaaa4',
        flex:1,
        alignItems:'center',
        justifyContent: "center",
       },
      rowStyle:{
        flexDirection: 'row',
        textAlign: 'right', 
        fontSize: 18,
        flex: 1,
        justifyContent: "space-between",
        alignItems:'center',
        padding: 13,
        
        
      },
      searchText:{
        flex:1,
        alignItems:'center',
        justifyContent: "center",
        paddingVertical:14,
        fontSize: 15,
        borderBottomColor: '#000000',
       borderBottomWidth: 1
      }
    });
    
export default Home;


