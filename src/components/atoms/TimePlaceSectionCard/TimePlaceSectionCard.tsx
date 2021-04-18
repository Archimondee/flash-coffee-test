import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TimePlaceSectionCardStyles';
interface TimePlaceSectionCardProps {
  text: string;
  timeBefore: string;
  timeAfter: string;
}

const TimePlaceSectionCard = (props: TimePlaceSectionCardProps) => {
  const {text, timeBefore, timeAfter} = props;
  return (
    <View
      style={{
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
      }}>
      <Text style={styles.textPlace}>{text}</Text>
      <View style={styles.containerComponent}>
        <Icon name="clock-time-four-outline" size={24} color="black" />
        <Text style={{fontSize: 12, paddingLeft: 10}}>
          {timeBefore} - {timeAfter}
        </Text>
      </View>
    </View>
  );
};

export default TimePlaceSectionCard;
