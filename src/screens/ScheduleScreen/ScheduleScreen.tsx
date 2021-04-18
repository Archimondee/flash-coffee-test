import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ScheduleScreenProps {}

const ScheduleScreen = (props: ScheduleScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ScheduleScreen</Text>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {},
});
