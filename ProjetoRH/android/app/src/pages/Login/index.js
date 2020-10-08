import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StatusBar,
  ScrollView,
} from 'react-native';

import Navigation from '../../navigatebar/Navigation';
import Home from '../Home';

export default function Login({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#2e2759'} />
        <View style={{ alignItems: 'center', paddingTop: 60 }}>
          <Image
            source={require('./logo.png')}
            style={{
              width: 300,
              height: 100,
            }}
          />
        </View>
        <Text style={{ paddingTop: 50, marginLeft: 20, fontSize: 20 }}>
          E-mail{'\n'}
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            fontSize: 20,
          }}></TextInput>
        <Text style={{ paddingTop: 50, marginLeft: 20, fontSize: 20 }}>
          Senha{'\n'}
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            fontSize: 20,
          }}></TextInput>
        <View style={{ paddingTop: 20 }}>
          <TouchableHighlight onPress={() => navigation.navigate('Navigation')}>
            <Text
              style={{
                color: '#fff',
                backgroundColor: '#2e2759',
                textAlign: 'center',
                fontSize: 25,
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 15,
                paddingTop: 15,
              }}>
              Entrar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}
