import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../colors.json';

const ImageBack = {uri:"https://i.pinimg.com/564x/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg"}

const Login = ({navigation}) => {
  return (
    <> 

    <StatusBar backgroundColor={colors.statusLoginColor} />


    <ImageBackground source={ImageBack} style={styles.image}>
       <View style={styles.imgLogo}>
         <Image
           style={styles.logo}
           source={require('../../Assets/iconBugados.png')}
        />
        </View>

    <View style={styles.container}>

    <View style={styles.form}>

    <Text style={styles.label}>Insira seu Email:</Text>
              <TextInput
              style={styles.input}
              placeholder="Seu email aqui"
              autoCapitalize="none"
              autoCorrect={false}
              />

<Text style={styles.label}>insira sua Senha:</Text>
              <TextInput
              style={styles.input}
              placeholder="Sua senha"
              autoCapitalize="none"
              autoCorrect={false}
              />      

       
       <TouchableOpacity style={styles.botaoAcesso} onPress={() => navigation.navigate('Navigation')}>
                <Text style={styles.fontBtn}>ACESSAR</Text>
              </TouchableOpacity>     
          </View>
      </View>
    </ImageBackground>    
    </>
  );
}

const styles = StyleSheet.create({
  imgLogo: {
    alignItems:'center'

  },

  logo: {    
    marginTop:'15%',
    width:150,
    height:150
},

  image: {
    height:'100%',
    opacity:50

},
  container: {
      flex: 1,     
  },

  form: {
      flexDirection:'column',     
       alignItems:'center',
       marginTop:'10%'

  },

  label: {    
    fontSize:15,
    fontFamily:'Roboto',
    fontWeight:'bold',
    color:'#6c6c6a'
  },

  input :{
       borderStyle:'solid',
       borderWidth:1.5,
       borderColor:'#820263',     
       borderRadius:7,       
       marginVertical:10,
       width:'80%',
       height:35,
       paddingHorizontal:15,
       paddingVertical:5,
       backgroundColor:"#e7e7e7",
       alignItems: 'center',
       
  },  

  botaoAcesso :{
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

});

export default Login;
