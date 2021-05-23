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

export const Text = styled.Text`
  color: #7a7a80;
  margin-top: 20px;
  font-size: 16px;
  line-height: 25px;
  max-width: 206px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxText = styled.Text`
  color: #7a7a80;
  font-size: 14px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  color: #7a7a80;
  font-size: 14px;
`;

export const SignUp = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const SignUpText = styled.Text`
  color: #7a7a80;
  font-size: 14px;
`;
