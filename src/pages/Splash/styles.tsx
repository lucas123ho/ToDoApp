import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '@styles/colors';
import fonts from '@styles/fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.whiteIce};
  padding: 45px;
`;

export const Content = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.medium};
  margin-top: 20px;
  color: ${colors.purple};
  line-height: 27px;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 17px;
  color: ${colors.gray};
  font-family: ${fonts.light};
  margin-top: 10px;
  text-align: center;
  line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 17px;
  margin-top: 60px;
`;

export const ContentButton = styled(LinearGradient)`
  padding: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  align-self: stretch;
`;

export const TextButton = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.whiteIce};
  font-size: 15px;
`;
