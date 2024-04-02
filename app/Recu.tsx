import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Botao from "../components/Botao";
import { Link } from "expo-router";

function Recu() {

    const styles = StyleSheet.create({
        text : {
            fontSize: 16,
            color: 'black',
            alignContent: 'center',
            textAlign: 'center',
            marginBottom: 20,
            fontWeight: 'bold', 
        },
    });

    return (
        <View>
            <StatusBar style="auto" />
            <Logo text="Recuperação de Senha" color="#011E83" />
            <Text style={styles.text}>Insira seu e-mail para recuperar a senha!</Text>
            <Input label="Email:" placeholder="Insira seu e-mail:" secureTextEntry={false} />
            <Link href="/Login" asChild>
                <Botao text="Enviar" color="#101010" />
            </Link>
        </View>
    );
}


export default Recu;