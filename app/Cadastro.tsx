import React from 'react';
import { View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../components/Logo';
import InputField from '../components/Input';
import Botao from '../components/Botao';
import useTheme from '../temas/Temas';

export default function Cadastro() {
  const cores = useTheme();
    const Theme = useColorScheme();
    const backgroundColor = Theme === 'dark' ? cores.bgPrimary : '#FF0000';
    const corbotoes = Theme === 'dark' ? cores.bgSecondary : '#000000';
  return (

    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View style={
        {backgroundColor: cores.bgPrimary, height: '100%'}
      }>
        <Logo text="Cadastre-se" color={backgroundColor} />
        <InputField label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
        <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
        <InputField label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
        <InputField label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
        <InputField label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
        <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={true}/>
        <Botao text="Cadastrar" color={corbotoes} href='/index' />
      </View>
    </KeyboardAwareScrollView>
  );
}