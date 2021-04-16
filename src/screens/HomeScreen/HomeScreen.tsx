import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/globalStyles';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={[globalStyles().container, {paddingHorizontal: 20}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{height: 50, width: 50, backgroundColor: 'red'}} />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text> LIVE ATTENDANCE</Text>
          </View>
          <View style={{height: 50, width: 50, backgroundColor: 'red'}} />
        </View>
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
