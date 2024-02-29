import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';
import Logo from '../components/Logo';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function cadastro () {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
    <View>

        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <View>
            <Input label="Nome" placeholder="Digite seu nome" hideText={false} />
            <Input label="Sobrenome" placeholder="Digite seu Sobrenome" hideText={false} />
            <Input label="Email" placeholder="Digite seu Email" hideText={false} />
            <Input label="Telefone" placeholder="Digite seu Telefone" hideText={false} />
            <Input label="Senha" placeholder="Digite sua Senha" hideText={true} />
            <Input label="Confirme sua Senha" placeholder="Confirme sua Senha" hideText={false} />
            <Botao text="Cadastrar" color="black" />

        </View>
        <StatusBar style="auto" />
    </View>
    </KeyboardAwareScrollView>
  );
}

export default cadastro;