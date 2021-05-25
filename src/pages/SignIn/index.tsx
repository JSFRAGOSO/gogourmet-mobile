import React, { useRef, useCallback, useState } from 'react';
import { TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  Text,
  FooterContainer,
  CheckboxContainer,
  CheckboxText,
  ForgotPassword,
  ForgotPasswordText,
  SignUp,
  SignUpText,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async data => {
      await api.post('sessions', data);
      navigation.navigate('Dashboard');
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <Title>Seja muito bem vindo(a)</Title>
        <Text>Faça seu login para começar uma experiência incrível.</Text>
      </Header>
      <Form
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onSubmit={handleSignIn}
        ref={formRef}
      >
        <Input
          name="email"
          icon="mail"
          placeholder="Email"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />
        <Input
          name="password"
          icon="lock"
          iconEnd="eye"
          placeholder="Senha"
          secureTextEntry
        />

        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Login
        </Button>
        <FooterContainer>
          <CheckboxContainer>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <CheckboxText>Lembrar-me</CheckboxText>
          </CheckboxContainer>
          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </FooterContainer>
        <SignUp onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Cadastrar-me</SignUpText>
        </SignUp>
      </Form>
    </Container>
  );
};

export default SignIn;
