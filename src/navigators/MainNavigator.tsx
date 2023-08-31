import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen';

import navigationConstants from './navigationConstants';
import { rootStackParamList } from './rootStackParams';

const Stack = createNativeStackNavigator<rootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={navigationConstants.HOME} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationConstants.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
