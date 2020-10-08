import React, { useState, useEffect } from 'react';
import { ScrollView, Text, SafeAreaView, View,StyleSheet,TextInput,StatusBar} from 'react-native';
import SearchIcon from 'react-native-vector-icons/MaterialIcons';

import api from '../../service/api';
import Header from '../components/header';
import colors from '../colors.json';



const Home = () => {
    const [funcionario, setFuncionario] = useState([]);
    console.log(funcionario);

    useEffect(() => {
        const loadData = () => {
            api.get('/funcionario').then(response => { setFuncionario(response.data) })
        }
        loadData()
    }, [])



    return (
    <SafeAreaView> 
         <Header/>  
        <StatusBar backgroundColor={colors.statusColor} />         

        <View style={styles.container}>                 
            <View style={styles.searchBar}>
                <TextInput style={styles.textInput} type='search' placeholder='Pesquise um funcionário'/>
                    <View style={styles.searchIcon}>
                        <SearchIcon name='search' size={25} color={'#594cae'}/>
                    </View>              
            </View>         

            <ScrollView>           
                <View style={{ marginHorizontal:'5%' }}>
                    {funcionario.map(item => (
                       
                        <View style={styles.cards}>
                            <View style={styles.cardContent}>
                                <Text style={styles.text}>
                                    Id: {item.id}
                                </Text>
                                <Text style={styles.text}>
                                    Nome: {item.nome}
                                </Text>
                                <Text style={styles.text}>
                                    CPF: {item.cpf}
                                </Text>
                            </View>
                        </View>    
                        
                    )
                )
            }
             </View> 
            </ScrollView>   
            
        </View>
    
    </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    searchBar:{
        height: 50,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        zIndex: 100,
        marginTop:-15,
        borderColor:'#DCDCDC',
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,         
        backgroundColor:'white',
        marginBottom:'5%'
    },

    textInput: {
        height: '100%',
        width: '70%',  
        backgroundColor: 'white',
        borderTopColor:'#A9A9A9',
        borderColor:'#DCDCDC',
        borderRadius:7,
        padding: 8
    },

    searchIcon: {
        width: '15%',       
        alignItems: 'center',
        justifyContent: 'center',
    },  

    cards: {
        borderStyle:'solid',
        borderWidth:1.5,
        borderColor:'#820263',     
        borderRadius:7,       
        marginTop:5,
        marginBottom:10,
        width:'100%',
        height: 80,
        paddingHorizontal:5,
        paddingVertical:3,
        backgroundColor:"#e7e7e7",
       
    },

    cardContent: {
        marginLeft: 10,
        alignItems: 'center'

    },

    text: {
        fontFamily:'Roboto',
        fontSize:15,
        color:'#6c6c6a'
    }
    

})

export default Home;