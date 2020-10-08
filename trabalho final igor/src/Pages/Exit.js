import React from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';

const Exit = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Login')}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({

    botao: {
        width: 320,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
})

export default Exit;
