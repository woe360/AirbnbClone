import React from 'react';
import {SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeSceen = () => {
  return (
    <SafeAreaView >
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search btn clicked')}
      >
        <Fontisto name="search" size={25} color={'red'}/>
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>


      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
        >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore btn clicked')}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>

      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeSceen;
