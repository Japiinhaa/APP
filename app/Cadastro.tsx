import React from 'react';
import { View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../components/Logo';
import Input from '../components/Input';
import Botao from '../components/Botao';
import useTheme from '../temas/Temas';

export default function Cadastro() {
  const cores = useTheme();
  return (

    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View style={
        {backgroundColor: cores.bgPrimary, height: '100%'}
      }>
        <Logo text="Cadastre-se" color={cores.bgPrimary} />
        <Input label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
        <Input label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
        <Input label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
        <Input label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
        <Input label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
        <Input label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={true}/>
        <Botao text="Cadastrar" color={cores.bgSecondary  } href='/index' />
      </View>
    </KeyboardAwareScrollView>
  );
}
