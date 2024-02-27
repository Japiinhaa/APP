import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const itens = ({id, item }) => {
    const styles = StyleSheet.create({
    
        display: {
            height: 66,
            width: 360,
            borderBottomWidth: 1,
            borderColor: '#F5F5F5',
            paddingHorizontal: 20,
            paddingVertical: 10,
            gap: 10,
        },
        text : {
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 19,
            color: 'black',
        },
        item: {
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 16,
            color: 'lightgray',
        },
    });

    return (
        <View style={styles.display}>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.item}>{item}</Text>
        </View>
    );
}

export default itens;