import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

Ionicons.loadFont();
MaterialIcons.loadFont();

import HomeScreen from './Home';
import CreateScreen from './Create';
import UpdateScreen from './Update';
import DeleteScreen from './Delete';
import LoginScreen from './Login';


const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: 'home',
  },

  Create: {
    lib: MaterialIcons,
    name: 'create',
  },

  Update: {
    lib: MaterialIcons,
    name: 'update',
  },

  Exit: {
    lib: Ionicons,
    name: 'exit',
  },
};

 const Navigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#594cae',
        inactiveTintColor: '#2e2759',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Início'}}
      />

      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{title: 'Cadastrar'}}
      />

      <Tab.Screen
        name="Update"
        component={UpdateScreen}
        options={{title: 'Atualizar'}}
      />

      <Tab.Screen
        name="Exit"
        component={LoginScreen}
        options={{title: 'Sair'}}
        onPress={() => navigation.navigate('Login')}
      />
    </Tab.Navigator>
  );
}

export default Navigation