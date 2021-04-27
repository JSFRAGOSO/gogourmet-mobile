import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { TextInputProps, TextInput } from 'react-native';

import {
  Container,
  Dividor,
  Icon,
  PasswordDiv,
  PasswordButton,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  iconEnd?: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  iconEnd,
  secureTextEntry,
  children,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [secureText, setSecureText] = useState(secureTextEntry);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(refe: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={30} color="#7A7A80" />
      <Dividor />
      <PasswordDiv>
        <TextInput
          style={{ flex: 1 }}
          defaultValue={defaultValue}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          secureTextEntry={secureText}
          {...rest}
        />
        <PasswordButton
          onPressIn={() => setSecureText(!secureText)}
          onPressOut={() => setSecureText(!secureText)}
        >
          {iconEnd && <Icon name={iconEnd} size={30} color="#AEAEB3" />}
        </PasswordButton>
      </PasswordDiv>
      {children}
    </Container>
  );
};

export default Input;
