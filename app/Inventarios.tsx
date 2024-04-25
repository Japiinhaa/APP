import React from "react";
import { Text,View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Itens from "../components/Itens"
import Bottom from "../components/Bottom"
import { AntDesign,FontAwesome5, FontAwesome6, Entypo, Foundation} from '@expo/vector-icons';
import { Link } from "expo-router";

const itens = () => {
    return (
        <View>
        <ScrollView>
            <View style={styles.displaytop}>
                <Foundation name="list" size={24} color="#595959" />
                <Text>
                    Lista
                </Text>
                <TouchableOpacity>
                    <Entypo name="magnifying-glass" size={24} color="#595959" />
                </TouchableOpacity>
            </View>
            <View>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
                <Itens id="956389" item="CADEIRA SENAI" href="/AddItens"/>
            </View>
        </ScrollView>
            <View style={styles.addButtonContainer}>
                <Link href="/AddItens">
                    <AntDesign name="pluscircle" size={50} color="red" />
                </Link>
            </View>
            <View>
                <Bottom color="red" coloricons="#ffff" bottom={0} position='fixed'/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    displaytop:{
        padding: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

addButtonContainer: {
    position: "absolute",
    bottom: 20,
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
});

export default itens;