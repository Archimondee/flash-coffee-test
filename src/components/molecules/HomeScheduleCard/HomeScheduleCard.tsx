import DayTime from 'components/atoms/DayTime/DayTime';
import TimePlaceSectionCard from 'components/atoms/TimePlaceSectionCard/TimePlaceSectionCard';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Schedule} from 'src/types/DataTypes';
import styles from './HomeScheduleCardStyles';
interface HomeScheduleCardProps {
  data: Schedule;
  index: number;
  last: number;
}

const HomeScheduleCard = (props: HomeScheduleCardProps) => {
  const {data, last, index} = props;

  const checkLast = last - 1 === index ? true : false;
  console.log('data', checkLast, last, index);
  return (
    <View style={styles(checkLast).container}>
      <DayTime day={data.day} date={data.date} />
      <TimePlaceSectionCard
        text={'Mediterania Garden Residence'}
        timeAfter={'17:00'}
        timeBefore={'08:00'}
      />
    </View>
  );
};

export default HomeScheduleCard;
