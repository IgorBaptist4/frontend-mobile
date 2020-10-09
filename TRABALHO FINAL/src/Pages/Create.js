import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text,TouchableHighlight,StyleSheet,TextInput,Alert,ImageBackground, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../service/api';
import colors from '../colors.json';
import Header from '../components/header';


const Image = {uri:"https://i.pinimg.com/564x/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg"}


const Create = ({navigation}) => {
    

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    
    
    const handleSubmit = () => {
        const funcionario = {                   
            cpf:cpf,           
            nome:nome,
        }

        api.post('/funcionario',funcionario) 
        
        .then(response => response.data)
        .then(data => {
            console.log(data)
        }) 
        .then(() =>  Alert.alert(
            "Tudo certo,",
            "Cadastro do funcionário realizado com sucesso!",
        )) 

        .catch(error => {
            console.log(error);
            Alert.alert("ERRO!");
        })       

        //.then(() => navigation.replace('Home'))

    }
        

    return (

   <>
    <StatusBar backgroundColor={colors.statusColor} />
    <Header/>
    <ImageBackground source={Image} style={styles.image}>   
        <ScrollView style={styles.scroll}>       
            <View style={styles.container}>             
                <View style={styles.form}> 
               
                  <Text style={styles.text}>Insira o CPF do funcionário:</Text>                     
                        <TextInput placeholder='CPF do funcionário'style={styles.textInput} onChangeText={text => setCpf(text)} keyboardType='numbers-and-punctuation'/>
                     <Text style={styles.text}>Insira o nome do funcionário:</Text>
                        <TextInput placeholder='Nome do funcionário'style={styles.textInput} onChangeText={text => setNome(text)} keyboardType='default'/>

                    <TouchableHighlight style={styles.btn} onPress={handleSubmit}> 
                        <Text style={styles.fontBtn}>CADASTRAR</Text>
                    </TouchableHighlight>
                </View>        
            </View>
        </ScrollView>
    </ImageBackground>
  </>
    )
}

const styles = StyleSheet.create({
    image: {
        height:'100%',
        opacity:50

    },

    container: {
       flex:3        
    },

    form: {
       flexDirection:'column',     
       alignItems:'center',
       marginTop:'25%'
    },

    text: {
        fontFamily:'Roboto',
        fontSize:15,
        fontWeight:'bold',
        color:'#6c6c6a'
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

    btn: {       
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
    fontBtn: {
        color:'white',
        fontWeight:'bold'
    }
   
    })
    
export default Create;