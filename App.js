import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Entype from 'react-native-vector-icons/Entypo';

import HomeSceen from "./src/screens/Home";


const App = () => {
  return (
    <SafeAreaView>
      <HomeSceen/>
    </SafeAreaView>
  );
};


export default App;
