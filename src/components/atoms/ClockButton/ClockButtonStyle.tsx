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
    button: {
      paddingVertical: 20,
      backgroundColor: position === 'left' ? '#04c4bc' : 'gray',
      paddingHorizontal: '14%',

      borderRadius: 7,
    },
  });

export default styles;
