import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';
import Logo from '../components/Logo';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link } from 'expo-router';

function cadastro () {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
    <View>
      <ScrollView>
        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <View>
            <Input label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
            <Input label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
            <Input label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
            <Input label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
            <Input label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
            <Input label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={false} />
            
            <Link href="/Inventarios" asChild>
              <Botao text="Cadastrar" color="black" />
            </Link>

        </View>
        <StatusBar style="auto" />
        </ScrollView>
    </View>
    </KeyboardAwareScrollView>
  );
}

export default cadastro;