import React, {useState} from 'react';
import {TextInput, TouchableHighlight, View, Text} from 'react-native';
import axios from 'axios'
import api from '../../service/api'

const Update = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState(0);

  submitHandler = (e) => {
    const funcionario = {
      nome,
      cpf
    };

    e.preventDefault();

    console.log(funcionario);
    console.log(id);


        axios.put(`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/funcionario/${id}`, funcionario)
        .then(response => {console.log(response); alert("Funcionario atualizada com sucesso!")})
        .catch(error =>{console.log(error); alert("ERRO!")})
    
  };

  return (
    <View>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={(number) => setId(number)}
      />
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TouchableHighlight onPress={submitHandler}>
        <Text>Atualizar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Update;
