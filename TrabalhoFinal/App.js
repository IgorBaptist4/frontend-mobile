import React from 'react';
import {View} from 'react-native';

import Update from './android/app/src/pages/Update';
import Create from './android/app/src/pages/Create';
import Login from './android/app/src/pages/Login';
import Delete from './android/app/src/pages/Delete';
import Home from './android/app/src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './android/app/src/navigatebar/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
