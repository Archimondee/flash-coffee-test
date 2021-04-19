import DateCard from 'components/molecules/DateCard/DateCard';
import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {UpcomingScheduleType} from 'src/types/DataTypes';
interface ScheduleListProps {
  data: UpcomingScheduleType[];
  onPress: (args1: string) => void;
}

const ScheduleList = (props: ScheduleListProps) => {
  const {data, onPress} = props;
  return (
    <FlatList
      data={data}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 40}}
      ListHeaderComponent={() => {
        return (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              marginVertical: 20,
              paddingHorizontal: 10,
            }}>
            April 2021
          </Text>
        );
      }}
      renderItem={({item}) => {
        return (
          <DateCard
            onPress={onPress}
            date={item.date}
            day={item.day}
            month={item.month}
            year={item.year}
            isToday={item.isToday}
            place={item.place}
          />
        );
      }}
      keyExtractor={(item, index) => `${item.date} ${index}`}
    />
  );
};

export default ScheduleList;

const styles = StyleSheet.create({
  container: {},
});
