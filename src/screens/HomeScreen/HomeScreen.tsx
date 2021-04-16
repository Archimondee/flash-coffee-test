import HomeHeaderSection from 'components/molecules/HomeHeaderSection/HomeHeaderSection';
import HomeOrganisms from 'components/organisms/HomeOrganisms/HomeOrganisms';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={[globalStyles().container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          marginBottom: -40,
        }}>
        <HomeOrganisms />
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
