import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TimeCardStyles';
interface TimeCardProps {
  //For time schedule
  clockIn?: string;
  clockOut?: string;

  //For clock in clock out
  clockText?: string;
}

const TimeCard = (props: TimeCardProps) => {
  const {clockOut, clockIn, clockText} = props;
  return clockOut !== '' && clockOut ? (
    <View style={styles.container}>
      <Icon name="clock-time-four-outline" size={24} color="black" />
      <Text style={styles.text}>
        {clockIn} - {clockOut}
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Icon name="qrcode-scan" size={24} color="black" />
      <Text style={styles.text}>{clockText ? clockText : '--:--'}</Text>
    </View>
  );
};

export default TimeCard;
