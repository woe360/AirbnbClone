import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Entype from 'react-native-vector-icons/Entypo';

import HomeSceen from './src/screens/Home';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[2];

const App = () => {
  return (
    <SafeAreaView>
      {/*<HomeSceen />*/}
      <Post post={post2}/>
    </SafeAreaView>
  );
};

export default App;
