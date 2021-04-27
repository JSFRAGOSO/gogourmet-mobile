import FeatherIcon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  justify-content: space-around;
  background-color: #ffffff;
  padding: 30px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #41414d;
  font-size: 40px;
  font-weight: bold;
  max-width: 270px;
`;

export const Subtitle = styled.Text`
  color: #7a7a80;
  margin-top: 20px;
  font-size: 16px;
  line-height: 25px;
  max-width: 206px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
`;
