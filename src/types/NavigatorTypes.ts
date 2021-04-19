export type RootStackParamList = {
  SplashScreen: undefined;
  Main: undefined;
  HomeScreen: undefined;
  ScheduleScreen: undefined;
  ScheduleDetailScreen: {title: string};
};

export type RootType =
  | 'SplashScreen'
  | 'HomeScreen'
  | 'Main'
  | 'ScheduleScreen'
  | 'ScheduleDetailScreen';
