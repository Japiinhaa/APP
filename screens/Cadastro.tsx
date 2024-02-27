import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';
import Logo from '../components/Logo';
import Botao from '../components/Botao';
import Input from '../components/Input';

function cadastro () {
  return (
    <View>

        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <View>
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="Sobrenome" placeholder="Digite seu Sobrenome" />
            <Input label="Email" placeholder="Digite seu Email" />
            <Input label="Telefone" placeholder="Digite seu Telefone" />
            <Input label="Senha" placeholder="Digite sua Senha" />
            <Input label="Confirme sua Senha" placeholder="Confirme sua Senha" />
            <Botao text="Cadastrar" color="black" />

        </View>
        <StatusBar style="auto" />
    </View>
  );
}

export default cadastro;