import {StyleSheet} from 'react-native';
const styles = (last?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      marginLeft: 20,
      width: 300,
      borderRadius: 20,
      marginRight: last ? 20 : 0,
    },
  });

export default styles;
