import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define your navigation stack
export type AppStackParamList = {
  CallStack: {AstroDetails: undefined};
  Login: undefined;
};

export type RootStackParamList = {
  [x: string]: any;
  AppStack: AppStackParamList;
  Login: AppStackParamList;
};

// Extend the ReactNavigation namespace
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Define the RootStackScreenProps type
export type RootStackScreenProps<Screen extends keyof AppStackParamList> =
  StackNavigationProp<AppStackParamList, Screen> & {
    route: RouteProp<AppStackParamList, Screen>;
  };
