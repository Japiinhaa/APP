import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import InventoryInput from "../components/Inputcad";
import Bottom from "../components/Bottom";
export default function AddItens() {
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View>
<View>
    <Header cor="#ff0000" texto="Adicionar Itens" />
    <View style={styles.paddingtop}>
    <InventoryInput label='N inventario'/>
    <InventoryInput label='Descrição' />
    <InventoryInput label='Local'/>
    <InventoryInput label='Responsavel'/>
    <InventoryInput label='Data de registro'/>
    </View>
    <Bottom color="ffff" coloricons= "#595959" bottom={0} position="fixed" />
    </View>
</View>
    );
} 