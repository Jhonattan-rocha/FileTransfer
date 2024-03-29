import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Modal } from 'react-native';
import style from './styled';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Files(){
    const [paths, setPaths] = React.useState([{name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}, {name: 'Teste1'}, {name: 'Teste2'}]);    
    const navigate = useNavigation();

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
