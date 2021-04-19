import {StyleSheet} from 'react-native';
const styles = (day?: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 5,
    },
    containerDate: {
      flex: 1,
      alignItems: 'center',
    },
    textDay: {
      fontSize: 12,
      color: '#4a4a4a',
    },
    textDate: {
      fontSize: 18,
      fontWeight: 'bold',
      color: day === 'Sun' ? '#fb3667' : 'black',
    },
    boxNoSchedule: {
      height: 75,
      backgroundColor: '#ffffff',
      flex: 6,
      borderRadius: 10,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: '#4a4a4a',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
