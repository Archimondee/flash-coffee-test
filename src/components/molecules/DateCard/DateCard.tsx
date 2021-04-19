import TimePlaceSectionCard from 'components/atoms/TimePlaceSectionCard/TimePlaceSectionCard';
import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './DateCardStyles';
interface DateCardProps {
  day: string;
  date: string;
  month: string;
  year: string;
  place: string;
  isToday: boolean;
  onPress: (title: string) => void;
}

const DateCard = (props: DateCardProps) => {
  const {day, date, place, isToday, onPress, month, year} = props;
  let title = date + ' ' + month + ' ' + year;
  return place !== '' ? (
    <View style={styles().container}>
      <View style={styles().containerDate}>
        <Text style={styles().textDay}>{day}</Text>
        <Text style={styles(day).textDate}>{date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onPress(title)}
        style={{flex: 6, backgroundColor: '#f4f4f4', borderRadius: 5}}>
        <TimePlaceSectionCard
          isToday={isToday}
          text={place}
          timeAfter={'17:00'}
          timeBefore={'08:00'}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles().container}>
      <View style={styles().containerDate}>
        <Text style={styles().textDay}>{day}</Text>
        <Text style={styles(day).textDate}>{date}</Text>
      </View>
      <View style={styles().boxNoSchedule}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>NO SCHEDULE</Text>
      </View>
    </View>
  );
};

export default DateCard;
