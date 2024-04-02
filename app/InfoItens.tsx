import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import ProdutoInfo from "../components/Produtoinfo";
import Bottom from "../components/Bottom";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function InfoItens() {
    const styles = StyleSheet.create({
        paddingtop: {
            marginTop: -20,
            backgroundColor: "#FBFBFB",
        },
        
        addButtonContainer: {
            position: "absolute",
            bottom: -200,
            right: 0,
            margin: 20,
            marginBottom: 40,
            marginRight: 20,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
        },
        },);

    return(
        <View>
            <View>
                <Header text="Descrição do item" color="red" colortxt="white" icon1="arrowleft" icon2="reload-outline"/>
            </View>
            <View style={styles.paddingtop}>
                <ProdutoInfo label='N inventario' info='956389'/>
                <ProdutoInfo label='Descrição' info='CADEIRA  SENAI'/>
                <ProdutoInfo label='Local' info='Sala 1'/>
                <ProdutoInfo label='Responsavel' info='João'/>
                <ProdutoInfo label='Data de registro' info='12/12/2021'/>
            </View>
            <View style={styles.addButtonContainer}>
                <Link href="/Editar">
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
                </Link>
            </View>
            <View>
                <Bottom color="ffff" coloricons= "#595959" bottom={-250} position='fixed'/>
            </View>
        </View>
    )
}