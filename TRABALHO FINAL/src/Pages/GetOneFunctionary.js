import React, {useState, useEffect} from 'react';
import {TextInput, TouchableHighlight, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import api from '../../service/api'

const GetOne = () => {
    
  const [funcionario, setFuncionario] = useState([])
  const [id, setId] = useState(0);

  submitHandler = () => {

    console.log(id);

    axios.get(`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/funcionario/${id}`, funcionario)
    .then(response => {console.log(response); setFuncionario(response.data)})
    .catch(error =>{console.log(error); alert("ERRO!")})

    console.log({funcionario})

  };
};

export default GetOne;
