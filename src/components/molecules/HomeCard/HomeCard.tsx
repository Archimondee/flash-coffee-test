import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ClockButton from 'components/atoms/ClockButton/ClockButton';
import TimePlaceSectionCard from 'components/atoms/TimePlaceSectionCard/TimePlaceSectionCard';
import styles from './HomeCardStyles';

interface HomeCardProps {
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const HomeCard = (props: HomeCardProps) => {
  const {onPressLeft, onPressRight} = props;
  return (
    <View style={styles.container}>
      <TimePlaceSectionCard
        timeAfter={'17:00'}
        timeBefore={'08:00'}
        text={'Mediterania Garden Residence'}
      />
      <View style={styles.containerMid}>
        <ClockButton
          text="CLOCK IN"
          size="small"
          position="left"
          onPressLeft={onPressLeft}
        />
        <ClockButton
          text="CLOCK OUT"
          size="small"
          position="right"
          onPressRight={onPressRight}
        />
      </View>
    </View>
  );
};

export default HomeCard;
