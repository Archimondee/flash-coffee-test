import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textAttendanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAttendance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
