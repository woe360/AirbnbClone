import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Entype from 'react-native-vector-icons/Entypo';

import HomeSceen from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <SafeAreaView>
      {/*<HomeSceen />*/}
      <Post />
    </SafeAreaView>
  );
};

export default App;
