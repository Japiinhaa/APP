import React from "react";
import { View, Text, StyleSheet,useColorScheme } from "react-native";
import Header from "../components/Header";
import Inputcad from "../components/Inputcad";
import Bottom from "../components/Bottom";
import { AntDesign } from '@expo/vector-icons';
import useTheme from "../temas/Temas";
export default function AddItens() {
    const cores = useTheme();
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View style={{
            backgroundColor: cores.bgPrimary,
            height: "100%",
        }}>
<View>
    <View style={styles.paddingtop}>
    <Inputcad label='N inventario'/>
    <Inputcad label='Descrição' />
    <Inputcad label='Local'/>
    <Inputcad label='Responsavel'/>
    <Inputcad label='Data de registro'/>
    </View>
    </View>
</View>
    );
} 
