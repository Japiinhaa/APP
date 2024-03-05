import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
            const Bottom = ({color, colorincons, bottom}) => {
                const styles = StyleSheet.create({
display: {
    position: "absolute",
    bottom: bottom,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    backgroundColor: color,
    borderTopWidth: 1,
    borderTopColor: "#cbcbcb",
}}
                );
                return (
                    <View>
                        <View style={styles.display}>
                            <FontAwesome6 name="camera-rotate" size={24} color={colorincons} />
                            <FontAwesome5 name="list-ol" size={24} color={colorincons} />
                        </View>
                    </View>
                );
            };

            export default Bottom;