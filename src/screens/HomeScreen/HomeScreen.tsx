import HomeHeaderSection from 'components/molecules/HomeHeaderSection/HomeHeaderSection';
import HomeOrganisms from 'components/organisms/HomeOrganisms/HomeOrganisms';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ViewToken,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';
import NavigationService from 'utils/NavigationService';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const schedule = [
    {
      day: 'Wednesday',
      date: '7 Apr',
    },
    {
      day: 'Thursday',
      date: '8 Apr',
    },
    {
      day: 'Friday',
      date: '9 Apr',
    },
  ];

  const gotoSchedule = () => {
    NavigationService.navigate('ScheduleScreen');
  };
  return (
    <SafeAreaView style={[globalStyles().container]}>
      <StatusBar backgroundColor={'#fbdd07'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          marginBottom: -40,
        }}>
        <HomeOrganisms dataSchedule={schedule} gotoSchedule={gotoSchedule} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
