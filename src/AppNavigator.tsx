import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchUserScreen } from './screens/SearchUserScreen';
import { UserInfoScreen } from './screens/UserInfoScreen';

const { Navigator, Screen } = createStackNavigator();

const ScreensNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='SearchUser' component={SearchUserScreen}/>
    <Screen name='UserInfo' component={UserInfoScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <ScreensNavigator/>
  </NavigationContainer>
);