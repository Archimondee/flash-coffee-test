import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import globalStyles from 'styles/globalStyles';
import NavigationService from 'utils/NavigationService';
import styles from './SplashScreenStyles';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.replace('Main');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={[globalStyles().container, styles.container]}>
      <Image
        source={require('../../assets/logo.png')}
        style={{height: 300, width: 300}}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
