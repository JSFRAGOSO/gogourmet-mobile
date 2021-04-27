import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f1f1fa;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Dividor = styled.View`
  width: 2px;
  height: 100%;
  background-color: #fff;
`;

export const PasswordDiv = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const PasswordButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
