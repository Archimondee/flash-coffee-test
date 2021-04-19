import React, {useLayoutEffect} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/core';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import globalStyles from 'styles/globalStyles';
import SectionLabel from 'components/atoms/SectionLabel/SectionLabel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimeCard from 'components/atoms/TimeCard/TimeCard';
import StoreCard from 'components/molecules/StoreCard/StoreCard';
import styles from 'screens/ScheduleDetailScreen/ScheduleDetailScreenStyle';

type ScheduleDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ScheduleDetailScreen'
>;
type ScheduleDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ScheduleDetailScreen'
>;

type Prop = {
  route: ScheduleDetailScreenRouteProp;
  navigation: ScheduleDetailScreenNavigationProps;
};

const ScheduleDetailScreen = ({route, navigation}: Prop) => {
  const {title} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
      ),
    });
  }, [title]);
  return (
    <ScrollView
      style={[globalStyles('white').container]}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SectionLabel leftText={'STORE'} />
        <StoreCard />
        <SectionLabel leftText={'TIME SCHEDULE'} />
        <TimeCard clockIn={'08:00'} clockOut={'17:00'} />
        <SectionLabel leftText={'CLOCK IN'} />
        <TimeCard />
        <SectionLabel leftText={'CLOCK OUT'} />
        <TimeCard />
      </View>
    </ScrollView>
  );
};

export default ScheduleDetailScreen;
