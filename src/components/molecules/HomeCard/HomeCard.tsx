import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ClockButton from 'components/atoms/ClockButton/ClockButton';
import TimePlaceSectionCard from 'components/atoms/TimePlaceSectionCard/TimePlaceSectionCard';
import styles from './HomeCardStyles';
import Dash from 'react-native-dash';

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

      {/* Dibuat benerin */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
          paddingBottom: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>-- : --</Text>
        <Dash
          style={{width: 100, height: 1, alignSelf: 'center'}}
          dashLength={10}
          dashGap={6}
          dashColor={'#ababab'}
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>-- : --</Text>
      </View>
    </View>
  );
};

export default HomeCard;
