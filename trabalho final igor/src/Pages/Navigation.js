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
import ExitScreen from './Exit';

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

  Delete: {
    lib: MaterialIcons,
    name: 'delete',
  },
  Exit: {
    lib: Ionicons,
    name: 'exit',
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
