import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import Files from "../Files";
import style from "./styled";
import Conexoes from "../Conexões";
import { useNavigation } from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo';
import { NetworkInfo } from 'react-native-network-info';
import DeviceInfo from 'react-native-device-info';

export default function Home(props){
    const navigate = useNavigation();
    const [ops, setOps] = React.useState(false);
    const [ip, setIp] = React.useState("");
    const [device, setDevice] = React.useState("");

    NetworkInfo.getIPAddress()
    .then(ip => setIp(ip))
    .catch(err => console.log(err));

    DeviceInfo.getDeviceName()
    .then(name => setDevice(name))
    .catch(err => console.log(err));

    return (
        <View style={style.main}>
            <Text style={style.text_title}>Dispositivo: {device}</Text>
            <Text style={style.text_title}>Endereço: {ip}</Text>
            <Text style={style.text_files}>Histórico de Conexoes</Text>
            <TouchableOpacity style={style.button} onPress={(e) => setOps(!ops)}>
                <Text style={style.button_con}>Conecar-se</Text>
            </TouchableOpacity>
            <View style={style.historic_files}>
                <Conexoes></Conexoes>
            </View>
            <Text style={style.text_con}>Histórico de Arquivos</Text>
            <View style={style.files}>
                <Files></Files>
            </View>
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
                            <Text style={{color: "black"}}>Conectar</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                :
                null
            }
        </View>
    );
}
