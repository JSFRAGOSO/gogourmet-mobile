import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Header, Title, Subtitle } from './styles';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Seja muito bem vindo(a)</Title>
        <Subtitle>
          Faça seu login para começar uma experiência incrível.
        </Subtitle>
      </Header>
      <Form onSubmit={handleLogin} ref={formRef}>
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
            console.log(`Chegou no press`);
            formRef.current?.submitForm();
          }}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default App;
