import React,{useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '../../service/api';
import axios from 'axios'
import 
{ 
    ScrollView, 
    Text, 
    SafeAreaView, 
    View, 
    Image, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput,

} from 'react-native';


const Delete = () => {

    const [funcionario, setFuncionario] = useState([]);
    const [id, setId] = useState(0);
    console.log(funcionario, setFuncionario);

    useEffect(() => {
        const loadData = () => {
            api.get('/funcionario').then(response => { setFuncionario(response.data) })
        }
        loadData()
    }, [])

    const deleteData = (id, nome, cpf) => {
        alert(`Funcionario: ${nome} 
        registrado no cpf: ${cpf}
        deletado com sucesso !`)
        api.delete(`/funcionario/${id}`).then(response => loadData())
    };

    const confirmarExclusao = (nome, cpf) => {
        alert(`Atenção, essa ação não poderá ser desfeita e o funcionário ${nome} registrado no cpf nº: ${cpf} será deletado permanentemente !.`)

    };

    const searchBar = () => {
        axios.get(`http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/funcionario/${id}`, funcionario)
        .then(response => {console.log(response); setFuncionario(response.data)})
        .catch(error =>{console.log(error)})
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={{
                alignItems: 'center',
                paddingTop: 40,
                paddingBottom: 10
            }}>
                <Image
                    source={require('../Login/logo.png')}
                    style={{
                        width: 300,
                        height: 100,
                    }}
                />
            </View> */}
            <ScrollView>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10
                    }}>Exclusão de funcionários</Text>
                </View>
                        <View>
                            <TextInput placeholder='Digite o id do funcionario'
                            value={id} onChangeText={(number) => setId(number)}/>

                            <TouchableOpacity style={styles.icon} onPress={() => searchBar()}>
                                <Icon name="search" color="#000" size={25} />
    
                            </TouchableOpacity>
                            <View>
          </View>
                        </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    {funcionario.filter(item => false).map(item => (
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
                                <TouchableOpacity
                                    style={styles.icon}
                                    onPress={() => deleteData(item.id, item.nome, item.cpf)}

                                >
                                    <Icon name="delete" color="#000" size={25} />
                                </TouchableOpacity>

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

const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
})

export default Delete;