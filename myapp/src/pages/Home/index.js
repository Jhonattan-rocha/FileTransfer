import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import Files from "../Files";
import style from "./styled";
import Conexoes from "../Conexões";
import { useNavigation } from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo';

export default function Home(props){
    const navigate = useNavigation();
    const [ops, setOps] = React.useState(false);

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
        <View style={style.main}>
            <Text style={style.text_files}>Histórico de Conexoes</Text>
            <View style={style.historic_files}>
                <Conexoes></Conexoes>
            </View>
            <Text style={style.text_con}>Histórico de Arquivos</Text>
            <View style={style.files}>
                <Files></Files>
            </View>
        </View>
    );
}
