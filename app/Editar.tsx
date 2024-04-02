import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Inputcad from "../components/Inputcad";
import Bottom from "../components/Bottom";
import { AntDesign } from '@expo/vector-icons';

export default function AddItens() {
        
    const styles = StyleSheet.create({
    
        paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View>
            <View>
                    <Header text="Cadastro de itens" color="red" colortxt="white" icon1={<AntDesign name="arrowleft" size={24} color="white" />} icon2={<AntDesign name="checkcircle" size={24} color="white" />}/>
                <View style={styles.paddingtop}>
                    <Inputcad label='N inventario'/>
                    <Inputcad label='Descrição' />
                    <Inputcad label='Local'/>
                    <Inputcad label='Responsavel'/>
                    <Inputcad label='Data de registro'/>
                </View>
                    <Bottom color="ffff" coloricons= "#595959" bottom={0} position="fixed" />
            </View>
        </View>
    );
} 