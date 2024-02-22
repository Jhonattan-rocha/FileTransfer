import React from "react";
import { View, Text, ScrollView } from "react-native";
import Files from "../Files";
import style from "./styled";

export default function Home(props){
    return (
        <ScrollView contentContainerStyle={style.main}>
            <View style={style.historic_files}>
                <Text>Parte para o histórico de conexões</Text>
            </View>
            <Text>Histórico de arquivos</Text>
            <View style={style.files}>
                <Files></Files>
            </View>
        </ScrollView>
    );
}
