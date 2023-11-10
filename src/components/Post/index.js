import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Text style={styles.bedroom}>1 Bed 1 Bathroom</Text>

      <Text style={styles.description} numberOfLines={2}>Lorem ipsum travli vali ansk faksf nask fnamfkas kfna kasn fkas fnask fnkas nis fnas knfaks nfkasf n</Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>34€</Text>
        <Text style={styles.price}>  43€ </Text>
        / night
      </Text>


      <Text style={styles.totalPrice}>212€ total</Text>
    </View>
  );
};

export default Post;
