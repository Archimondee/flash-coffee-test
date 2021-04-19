import * as React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './HeaderTimerStyles';

interface HeaderTimerProps {}

const HeaderTimer = (props: HeaderTimerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}> 07 : 30</Text>
      <Text style={styles.textDate}>Monday, 5 Apr 2021</Text>
    </View>
  );
};

export default HeaderTimer;
