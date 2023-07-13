/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../screens/SignInScreen';
import TaskScreen from '../../screens/TaskScreen';
import HomeScreen from '../../screens/HomeScreen';
// import SignInScreen from '../screens/SignInScreen';
// import HomeScreen from '../screens/HomeScreen';
// import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
