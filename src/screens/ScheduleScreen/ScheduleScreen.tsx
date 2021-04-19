import TimePlaceSectionCard from 'components/atoms/TimePlaceSectionCard/TimePlaceSectionCard';
import ScheduleList from 'components/organisms/ScheduleList/ScheduleList';
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UpcomingScheduleType} from 'src/types/DataTypes';
import globalStyles from 'styles/globalStyles';
interface ScheduleScreenProps {}

const ScheduleScreen = (props: ScheduleScreenProps) => {
  const data: UpcomingScheduleType[] = [
    {
      day: 'Mon',
      date: '5',
      month: 'April',
      year: '2021',
      place: 'Mediterania Garden Residence',
      isToday: true,
    },
    {
      day: 'Tue',
      date: '6',
      month: 'April',
      year: '2021',
      place: '',
      isToday: false,
    },
    {
      day: 'Wed',
      date: '7',
      month: 'April',
      year: '2021',
      place: 'Mediterania Garden Residence',
      isToday: false,
    },
    {
      day: 'Thu',
      date: '8',
      month: 'April',
      year: '2021',
      place: 'Mediterania Garden Residence',
      isToday: false,
    },
    {
      day: 'Fri',
      date: '9',
      month: 'April',
      year: '2021',
      place: '',
      isToday: false,
    },
    {
      day: 'Sat',
      date: '10',
      month: 'April',
      year: '2021',
      place: 'Mediterania Garden Residence',
      isToday: false,
    },
    {
      day: 'Sun',
      date: '11',
      month: 'April',
      year: '2021',
      place: 'Mediterania Garden Residence',
      isToday: false,
    },
  ];
  return (
    <View style={[globalStyles('white').container]}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <ScheduleList data={data} />
      </View>
    </View>
  );
};

export default ScheduleScreen;
