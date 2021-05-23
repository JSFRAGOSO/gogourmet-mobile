import React, { useRef, useCallback, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Input from './components/Input';
import Button from './components/Button';

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

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleLogin = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Seja muito bem vindo(a)</Title>
        <Text>Faça seu login para começar uma experiência incrível.</Text>
      </Header>
      <Form
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onSubmit={handleLogin}
        ref={formRef}
      >
        <Input name="email" icon="mail" placeholder="Email" />
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
        <SignUp>
          <SignUpText>Cadastrar-me</SignUpText>
        </SignUp>
      </Form>
    </Container>
  );
};

export default App;
