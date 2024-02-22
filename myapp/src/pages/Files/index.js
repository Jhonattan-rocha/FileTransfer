import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Modal } from 'react-native';
import style from './styled';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function Files(){
    const [paths, setPaths] = React.useState([{name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}]);    
    const [ops, setOps] = React.useState(false);
    const navigate = useNavigation();

    React.useEffect(() => { 
        navigate.setOptions({
            headerRight: props => (
                <View {...props}>
                     <TouchableOpacity onPress={() => setOps(!ops)}>
                        <IconEnt  name="dots-three-horizontal" size={20} color="#000"></IconEnt>
                     </TouchableOpacity>                    
                        {ops ? 
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={ops}
                                onRequestClose={() => setOps(false)}
                            >
                                <TouchableOpacity style={style.modalContainer} onPress={() => setOps(false)}>
                                    <View style={[style.modalContent]}>
                                        <TouchableOpacity
                                        style={style.option}
                                        >
                                        <Text style={{color: "black"}}>Deletar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                            :
                            null
                        }
                </View>
            )
        })
    }, [navigate, ops, setOps]);

    return (
            <SafeAreaView>
                <FlatList
                data={paths}
                keyExtractor={(item, index) => index}
                initialNumToRender={5} // Número inicial de elementos a serem renderizados
                windowSize={5}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                        }} 
                        style={style.item}
                        onLongPress={() => {}}>
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <IconAnt name="file1" color="#000" size={25}></IconAnt>
                                <Text style={{color: "black"}}> {String(item.name).replace("/", "")}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                numColumns={1}
                ></FlatList>
            </SafeAreaView>
    );
}
