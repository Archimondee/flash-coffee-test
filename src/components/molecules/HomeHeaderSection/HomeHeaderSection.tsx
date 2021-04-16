import HeaderAttendance from 'components/atoms/HeaderAttendance/HeaderAttendance';
import HeaderTimer from 'components/atoms/HeaderTimer/HeaderTimer';
import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeHeaderSectionStyles';
interface HomeHeaderSectionProps {}

const HomeHeaderSection = (props: HomeHeaderSectionProps) => {
  return (
    <View style={styles.container}>
      <HeaderAttendance />
      <HeaderTimer />
    </View>
  );
};

export default HomeHeaderSection;
