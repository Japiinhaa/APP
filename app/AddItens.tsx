import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Inputcad from "../components/Inputcad";
import Bottom from "../components/Bottom";
import { Link } from 'expo-router';

export default function AddItens() {
    return(

<View>
        <Header text="Cadastro de itens" color="red" colortxt="white" icon1="arrowleft" icon2="pluscircleo"/>
    <View>
        <Inputcad label="N° inventario * " />
        <Inputcad label="Descrição * " />
        <Inputcad label="Local * " />
        <Inputcad label="Responsável * " />
        <Inputcad label="Data de registro * " />
    </View>
        <Bottom color="#ffff" coloricons="#595959" bottom={-370} position='fixed'/>
    </View>
);
} 