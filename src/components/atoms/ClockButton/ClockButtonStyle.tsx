import {StyleSheet} from 'react-native';
const styles = (position?: string) =>
  StyleSheet.create({
    containerButton: {
      backgroundColor: position === 'left' ? '#04c4bc' : '#fb3667',
      padding: 10,
      borderRadius: 7,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
  });

export default styles;
