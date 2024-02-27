import Itens from "../components/Itens";
import { View, StyleSheet } from "react-native";
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Inventario = () => {
    const styles = StyleSheet.create({
        Inventario: {
            height: 60,
            width: 360,
            borderRadius: 5,
            justifyContent: 'space-between',
        }
    });

    return (
        <View style={styles.Inventario}>
            <Foundation name="list" size={24} color="#595959" />
            <Entypo name="magnifying-glass" size={24} color="#595959" />

            <View>
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
                <Itens id="1" item="item 1" />
            </View>
        </View>
    );
}
export default Inventario;