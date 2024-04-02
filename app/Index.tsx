import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking, StatusBar } from "react-native";
import Logo from "../components/Logo"
import Botao from "../components/Botao"
import Input from "../components/Input"
import { Link, Stack } from "expo-router";

function login() {
  return (
    <View>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        
      <View>
        <Logo text="Login" color="black" />
      </View>
      <View>
        <Text style={styles.text} >Faça Login Para Acessar o Sistema!</Text>

        <Input label="Email:" placeholder="Digite Email" secureTextEntry={false} />
        <Input label="Senha:" placeholder="Digite sua Senha" secureTextEntry={true}/>

        <Link href="/Inventarios" asChild>
          <TouchableOpacity>
            <Botao text="Entrar" color="black" />
          </TouchableOpacity>
        </Link>

      </View>
      <View style={styles.links}>
        
        <Link href="/Cadastro" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Cadastre-Se</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Recu" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </Link>

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