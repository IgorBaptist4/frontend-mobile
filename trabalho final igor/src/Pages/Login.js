import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
{/*       <Image
      style={styles.logo}
      source={require('./assets/logo.png')}
      /> */}

      <TextInput
      style={styles.input}
      placeholder="Digite seu ID"
      autoCapitalize="none"
      autoCorrect={false}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite seu nome"
      autoCapitalize="none"
      autoCorrect={false}
      />

       <TextInput
      style={styles.input}
      placeholder="Digite seu CPF"
      autoCapitalize="none"
      autoCorrect={false}
      />

       <TextInput
      style={styles.input}
      placeholder="Digite sua senha"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      />
       
       <TouchableOpacity
       style={styles.botao}
       onPress={() => navigation.navigate('Navigation')}
       >
         <Text style={styles.botaoAcesso}>Acessar</Text>
       </TouchableOpacity>
       
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8d8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input :{
    marginTop: 10,
    padding: 10,
    width: 320,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },

  botao: {
    width: 320,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoAcesso :{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  logo: {
    height: 100,
    width: '80%',
    marginBottom: 20,
  }

});
