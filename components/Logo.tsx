import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

type LogoProps = {
    text: string,
    color: string,
}

const Logo = ({text, color}) => {
    const styles = StyleSheet.create({
        header: {
            marginBottom: 20,
            gap: 20,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            padding: 50,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
        },
        logo: {
            width: 181,
            height: 39,
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
    });

    return (
        <View style={styles.header}>
            <Image source={require('../components/senai.png')} style={styles.logo} />
            <Text style={styles.headerText}>{text}</Text>
        </View>
    );
}

export default Logo;