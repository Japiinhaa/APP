import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Inputcad from "../components/Inputcad";
import Bottom from "../components/Bottom";
import { MaterialIcons } from '@expo/vector-icons';


export default function Scanner() {

    const styles = StyleSheet.create({
        displaycode: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
        },
    });

    return(
<View>
    <Header text="Cadastro de itens" color="red" colortxt="white" icon1="arrowleft" icon2="pluscircleo"/>
    <View style={styles.displaycode}>
        <MaterialIcons name="qr-code-scanner" size={300} color="#5d5c5c" />
    </View>
        <Bottom color="#ffff" colorincons="#595959" bottom={-260}/>
    </View>
);
} 