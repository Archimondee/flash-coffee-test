import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './DayTimeStyles';

interface DayTimeProps {
  day: string;
  date: string;
}

const DayTime = (props: DayTimeProps) => {
  const {day, date} = props;
  return (
    <View style={{paddingTop: 20, paddingHorizontal: 20}}>
      <Text style={styles.textTime}>{day.toUpperCase()}</Text>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};

export default DayTime;
