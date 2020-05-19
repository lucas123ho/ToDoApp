import styled from "styled-components/native";

import colors from "@styles/colors";
import fonts from "@styles/fonts";

interface ContentProps {
  checked: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const Content = styled.TouchableOpacity`
  background-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${({ checked }: ContentProps) =>
    checked === true ? colors.green : colors.darkGray};
  align-self: stretch;
  padding: 19px 12px;
  flex: 1;
`;

export const TextDate = styled.Text`
  font-size: 11px;
  font-family: ${fonts.regular};
  color: ${colors.darkGray2};
  margin-left: 11px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};
  color: ${colors.purple};
  margin-left: 13px;
  flex: 1;
`;

export const ContainerRemove = styled.TouchableOpacity`
  padding-left: 13px;
  align-items: center;
  justify-content: center;
`;  

export const ButtonRemove = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: ${colors.lightRed};
  align-items: center;
  justify-content: center;
`;