import React, {useState, useEffect} from 'react';
import {TextInput, TouchableHighlight, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import api from '../src/Services/api'

const GetOne = () => {
    
  const [funcionario, setFuncionario] = useState([])
  const [id, setId] = useState(0);



  submitHandler = (e) => {

    e.preventDefault();

    console.log(id);

    axios.get(`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/funcionario/${id}`, funcionario)
    .then(response => {console.log(response); setFuncionario(response.data)})
    .catch(error =>{console.log(error); alert("ERRO!")})

    console.log({funcionario})

  };

  return (
    <>
        <View>
        <TextInput
            placeholder="ID"
            value={id}
            onChangeText={(number) => setId(number)}
        />
        <TouchableHighlight onPress={submitHandler}>
            <Text>Buscar</Text>
        </TouchableHighlight>
        </View>

          <View>
            <Text>ID: {funcionario.id}</Text>
            <Text>NOME: {funcionario.nome}</Text>
            <Text>CPF: {funcionario.cpf}</Text>
          </View>

    </>
  );
};

export default GetOne;
