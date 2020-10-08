
import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler';

import Login from './src/Pages/Login';
import Create from './src/Pages/Create';
import Delete from './src/Pages/Delete';
import Update from './src/Pages/Update';
import Exit from './src/Pages/Exit';
import Home from './src/Pages/Home';
import Navigation from './src/Pages/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

type Props = {};

export default class App extends Component<Props>{

  componentDidMount(){
  SplashScreen.hide();
}
  
render(){
  return (
    
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Create" component={Create}/>
         <Stack.Screen name="Exit" component={Exit} />
         <Stack.Screen name="Delete" component={Delete} />
         <Stack.Screen name="Update" component={Update} />
         <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
  </NavigationContainer>
  
  );
}
}


