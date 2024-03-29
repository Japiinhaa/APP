import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking, StatusBar } from "react-native";
import Logo from "../components/Logo"
import Botao from "../components/Botao"
import Input from "../components/Input"

function login() {
  return (
    <View>
      <View>
        <Logo text="Login" color="black" />
      </View>
      <View>
        <Text style={styles.text} >Faça Login Para Acessar o Sistema!</Text>

        <Input label="Email:" placeholder="Digite Email" hideText={false} />
        <Input label="Senha:" placeholder="Digite sua Senha" hideText={true}/>
        <Botao text="Entrar" color="black" />
      </View>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={styles.link}>Cadastre-Se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
    }, 
    link: {
    fontSize: 14,
    color: 'blue',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
export default login;