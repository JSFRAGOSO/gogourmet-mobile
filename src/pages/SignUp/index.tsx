import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, Header, Title, Text } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async data => {
      await api.post('users', data);
      navigation.goBack();
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <Title>Crie sua conta e faça o seu pedido</Title>
        <Text>Preencha seus dados cadastrais abaixo.</Text>
      </Header>
      <Form
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onSubmit={handleSignUp}
        ref={formRef}
      >
        <Input name="name" icon="user" placeholder="Nome" />
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
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
