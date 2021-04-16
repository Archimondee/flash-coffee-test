import * as React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './HeaderAttendanceStyles';

interface HeaderAttendanceProps {}

const HeaderAttendance = (props: HeaderAttendanceProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/people.jpg')}
        style={styles.image}
      />
      <View style={styles.textAttendanceContainer}>
        <Text style={styles.textAttendance}>LIVE ATTENDANCE</Text>
      </View>
      <Icon name="notifications-outline" size={45} color="black" />
    </View>
  );
};

export default HeaderAttendance;
