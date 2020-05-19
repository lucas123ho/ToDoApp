import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "@styles/colors";
import fonts from "@styles/fonts";

export const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: flex-end;
`;

export const Out = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(33, 32, 32, 0.24);
  z-index: -1;
`;

export const Content = styled.View`
  padding: 0 0 22px 0;
  background-color: ${colors.white};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
`;

export const Close = styled.TouchableOpacity`
  align-items: center;
  margin-top: -53px;
  padding-top: 20px;
  z-index: 9999;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #404040;
  font-family: ${fonts.medium};
  text-align: center;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  font-family: ${fonts.regular};
  color: ${colors.black};
  padding: 22px;
  text-align: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 0 22px;
`;

export const ContentButtonAdd = styled(LinearGradient)`
  padding: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  align-self: stretch;
  margin-top: 10px;
`;

export const TextButtonAdd = styled.Text`
  font-size: 18px;
  font-family: ${fonts.medium};
  color: ${colors.white};
`;
