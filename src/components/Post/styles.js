import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    fontSize: 14,
    color: '#6c6a6a',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    marginVertical: 10,
    fontSize: 18,
  },
  oldPrice: {
    color: '#6c6a6a',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#6c6a6a',
    textDecorationLine: 'underline',
  },
});


export default styles;
