import React, { useState, useEffect } from 'react';
import { ScrollView, Text, SafeAreaView, View, Image } from 'react-native';

import api from '../../service/api';

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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                alignItems: 'center',
                paddingTop: 40,
                paddingBottom: 10
            }}>
{/*                 <Image
                    source={require('../Login/logo.png')}
                    style={{
                        width: 300,
                        height: 100,
                    }}
                /> */}
            </View>
            <ScrollView>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10
                    }}>Relatório de Funcionários Cadastrados</Text>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    {funcionario.map(item => (
                        <View style={{
                            borderColor: "#2e2759",
                            borderWidth: 1,
                            paddingTop: 3,
                            marginTop: 2,
                            paddingBottom: 3
                        }}>
                            <View style={{
                                marginLeft: 10,
                                alignItems: 'center'
                            }}>
                                <Text>
                                    Id: {item.id}
                                </Text>
                                <Text>
                                    Nome: {item.nome}
                                </Text><Text>
                                    CPF: {item.cpf}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Home;