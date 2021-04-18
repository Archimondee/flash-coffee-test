import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface DayTimeProps {
  day: string;
  date: string;
}

const DayTime = (props: DayTimeProps) => {
  const {day, date} = props;
  return (
    <View style={{paddingTop: 20, paddingHorizontal: 20}}>
      <Text style={{color: '#ababab', fontSize: 12}}>{day.toUpperCase()}</Text>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 5}}>
        {date}
      </Text>
    </View>
  );
};

export default DayTime;

const styles = StyleSheet.create({
  container: {},
});
