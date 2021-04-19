import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TimePlaceSectionCardStyles';
interface TimePlaceSectionCardProps {
  text: string;
  timeBefore: string;
  timeAfter: string;
  isToday?: boolean;
}

const TimePlaceSectionCard = (props: TimePlaceSectionCardProps) => {
  const {text, timeBefore, timeAfter, isToday} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textPlace}>{text}</Text>
      <View style={styles.containerComponent}>
        <Icon name="clock-time-four-outline" size={24} color="black" />
        <Text style={{fontSize: 12, paddingLeft: 10}}>
          {timeBefore} - {timeAfter}
        </Text>
        {isToday ? (
          <View style={styles.containerToday}>
            <Text style={{fontSize: 12, color: 'white'}}>TODAY</Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default TimePlaceSectionCard;
