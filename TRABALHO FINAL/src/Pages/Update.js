import React, {useState} from 'react';
import {
  TextInput,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import axios from 'axios';
import api from '../../service/api';
import Header from '../components/header';
import colors from '../colors.json';

const Image = {uri:'https://i.pinimg.com/564x/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg',};

const Update = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState('');

  submitHandler = (e) => {
    const funcionario = {
      nome,
      cpf,
    };


    axios.put(`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/funcionario/${id}`,funcionario, )
      .then((response) => {
        console.log(response);
        alert('Funcionario atualizada com sucesso!');
      })
      .catch((error) => {
        console.log(error);
        alert('ERRO!');
      });
  };

  return (
    <> 
    <StatusBar backgroundColor={colors.statusColor} />
      <Header/>
    <ImageBackground source={Image} style={styles.image}>   
        <ScrollView style={styles.scroll}>  
            <View style={styles.container}>
                <Text style={styles.text}>Insira o ID do funcionário:</Text>        
                <TextInput
                  style={styles.textInput}
                  placeholder="ID do funcionário"
                  value={id}
                  onChangeText={(number) => setId(number)}
                />
                
                <Text style={styles.text}>Insira o nome do funcionário:</Text>        
                <TextInput
                  style={styles.textInput}
                  placeholder="Nome do funcionário"
                  value={nome}
                  onChangeText={(text) => setNome(text)}
                />
                <Text style={styles.text}>Insira o CPF do funcionário:</Text>        
                <TextInput
                  style={styles.textInput}
                  placeholder="CPF do funcionário"
                  value={cpf}
                  onChangeText={(text) => setCpf(text)}
                />
                <TouchableHighlight style={styles.btn} onPress={submitHandler}>
                  <Text style={styles.btnText}>ATUALIZAR</Text>
                </TouchableHighlight>
              </View>
          </ScrollView>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
       flexDirection:'column',     
       alignItems:'center',
       marginTop:'20%'
  },

  image: {     
      height:'100%',
      opacity:50
  },

  textInput: {
       borderStyle:'solid',
       borderWidth:1.5,
       borderColor:'#820263',     
       borderRadius:7,       
       marginVertical:10,
       width:'80%',
       height:35,
       paddingHorizontal:15,
       paddingVertical:5,
       backgroundColor:"#e7e7e7"


  },

  text: {
      fontFamily:'Roboto',
      fontSize:15,
      fontWeight:'bold',
      color:'#6c6c6a'

  },

  btn:{
        borderRadius:5, 
        paddingVertical:6,        
        paddingHorizontal:'20%',
        marginTop:'10%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 1,
        marginBottom:'5%',
        backgroundColor:'#820263',

  },

  btnText: {
    color:'white',
    fontWeight:'bold'
  }
})

export default Update;
