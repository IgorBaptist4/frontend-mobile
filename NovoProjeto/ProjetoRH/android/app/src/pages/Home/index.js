import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, Text, SafeAreaView, StyleSheet, FlatList, TextInput, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Navigation from '../../navigatebar/Navigation';
const Home = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        fetch('http:residencia-ecommerce.us-east-1.elasticbeanstalk.com/swagger-ui.html#/')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (funcionario) {
                    const funcionarioData = funcionario.id
                        ? funcionario.id.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return funcionarioData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const FuncionarioView = ({ fucionario }) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getFuncionario(funcionario)}>
                {funcionario.id}
                {'.'}
                {funcionario.id.toUpperCase()}
            </Text>
        );
    };

    const FuncionarioSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getFuncionario = (funcionario) => {
        // Function for click on an item
        alert('Id : ' + funcionario.id + ' Nome : ' + funcionario.nome);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ alignItems: 'center', paddingTop: 60 }}>
                <Image
                    source={require('../Login/logo.png')}
                    style={{
                        width: 300,
                        height: 100,

                    }}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(funcionario, index) => index.toString()}
                    ItemSeparatorComponent={FuncionarioSeparatorView}
                    renderItem={FuncionarioView}
                />
            </View>
            <ScrollView>

                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                    <View style={{
                        borderColor: '#2e2759',
                        borderWidth: 1,
                        padding: 30,
                        marginLeft: 40
                    }}>
                        <MaterialIcons
                            name="create"
                            size={40}
                            color="#2e2759"
                            onPress={() => navigation.navigate('Navigation')}
                            style={{ paddingLeft: 15, }}

                        />
                        <Text>Cadastrar</Text>
                    </View>
                    <View style={{
                        borderColor: '#2e2759',
                        borderWidth: 1,
                        padding: 30,
                        marginLeft: 40
                    }}>
                        <MaterialIcons
                            name="update"
                            size={40}
                            color="#2e2759"
                            onPress={() => navigation.navigate('Update')}
                            style={{ paddingLeft: 5 }}
                        />
                        <Text>Atualizar</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        borderColor: '#2e2759',
                        borderWidth: 1,
                        padding: 30,
                        paddingRight: 39,
                        paddingLeft: 39,
                        marginLeft: 40,
                        marginTop: 20
                    }}>
                        <MaterialIcons
                            name="delete"
                            size={40}
                            color="#2e2759"
                            onPress={() => navigation.navigate('Delete')}
                        />
                        <Text>Excluir</Text>
                    </View>
                    <View style={{
                        borderColor: '#2e2759',
                        borderWidth: 1,
                        padding: 30,
                        marginLeft: 40,
                        marginTop: 20,
                        paddingRight: 40,
                        paddingLeft: 40
                    }}>
                        <Icon
                            name="exit"
                            size={40}
                            color="#2e2759"
                            onPress={() => navigation.navigate('Exit')}
                        />
                        <Text>Sair</Text>

                    </View></View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});
export default Home;
