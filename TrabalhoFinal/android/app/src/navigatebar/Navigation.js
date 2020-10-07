import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

Ionicons.loadFont();
AntDesign.loadFont();

import HomeScreen from '../pages/Home';
import CreateScreen from '../pages/Create';
import UpdateScreen from '../pages/Update';
import DeleteScreen from '../pages/Delete';
import ExitScreen from '../pages/Exit';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: 'home',
  },

  Create: {
    lib: AntDesign,
    name: 'bars',
  },

  Update: {
    lib: FontAwesome5,
    name: 'store',
  },

  Delete: {
    lib: Ionicons,
    name: 'card',
  },
  Exit: {
    lib: Ionicons,
    name: 'card',
  },
};

export default function Navigation() {
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
        activeTintColor: '#159815',
        inactiveTintColor: '#000',
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
        name="Delete"
        component={DeleteScreen}
        options={{title: 'Excluir'}}
      />

      <Tab.Screen
        name="Exit"
        component={ExitScreen}
        options={{title: 'Sair'}}
      />
    </Tab.Navigator>
  );
}
