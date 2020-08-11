import React from "react";
import Form from "./Form";
//import Navigation from "./Navigation";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//<Form history={history} handleSubmit={handleSubmit} />
const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Films</h1>
      
      <Navigation />
    </div>
  );
};

export default Header;
