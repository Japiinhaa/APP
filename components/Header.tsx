import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Header({ texto, cor, colortxt, icon1, icon2 }) {
    const styles = StyleSheet.create({
        displaytop: {
            padding: 20,
            paddingTop: 30,
            marginBottom: 20,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: cor
        }
    });

    return (
        <View>
            <View style={styles.displaytop}>
                <AntDesign name={icon1} size={24} color={colortxt} />
                <Text style={{ color: colortxt }}>{texto}</Text>
                <Link href="/InfoItens" asChild>
                    <TouchableOpacity>
                        <AntDesign name={icon2} size={24} color={colortxt} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}