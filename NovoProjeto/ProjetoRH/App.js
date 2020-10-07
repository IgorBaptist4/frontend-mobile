import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from './android/app/src/pages/Login';
import Create from './android/app/src/pages/Create';
import Delete from './android/app/src/pages/Delete';
import Update from './android/app/src/pages/Update';
import Exit from './android/app/src/pages/Exit';
import Home from './android/app/src/pages/Home';
import Navigation from './android/app/src/navigatebar/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Exit" component={Exit} />
        <Stack.Screen name="Delete" component={Delete} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
