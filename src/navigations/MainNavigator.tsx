import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import ScheduleScreen from 'screens/ScheduleScreen/ScheduleScreen';
import {Button, Alert, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from 'utils/NavigationService';
import ScheduleDetailScreen from 'screens/ScheduleDetailScreen/ScheduleDetailScreen';

const Main = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  //headerTintColor: '#65b6e5',
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={options}>
      <Main.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{
          headerStyle: {backgroundColor: '#fbdd07'},
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 25}}
              onPress={NavigationService.back}>
              <MaterialIcons
                name="keyboard-backspace"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              UPCOMING SCHEDULE
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 20}}>
              <Icon name="refresh" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Main.Screen
        name="ScheduleDetailScreen"
        component={ScheduleDetailScreen}
        options={({navigation, route}) => ({
          headerStyle: {backgroundColor: '#fbdd07'},
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 25}}
              onPress={NavigationService.back}>
              <MaterialIcons
                name="keyboard-backspace"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
