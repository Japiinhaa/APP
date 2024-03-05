import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Inputcad from "../components/Inputcad";
import Bottom from "../components/Bottom";
export default function AddItens() {
    return(
<View>
    <Header text="Cadastro de itens" color="red" colortxt="white" icon1="arrowleft" icon2="pluscircleo"/>
    <View>
        <Inputcad />
        <Inputcad />
        <Inputcad />
        <Inputcad />
        <Inputcad />
    </View>
        <Bottom color="ffff" colorincons="595959" bottom={-370}/>
    </View>
);
} 