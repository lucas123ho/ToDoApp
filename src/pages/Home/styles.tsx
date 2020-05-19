import styled from 'styled-components/native';

import colors from '@styles/colors';
import fonts from '@styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.whiteIce};
`;

export const Header = styled.ImageBackground`
  padding: 55px 18px 20px 18px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-family: ${fonts.regular};
  color: ${colors.white};
`;

export const Count = styled.Text`
  font-size: 10px;
  font-family: ${fonts.regular};
  color: #F1F1F1;
`;

export const Avatar = styled.ImageBackground`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  overflow: hidden;
`;


export const ContentEmpty = styled.ScrollView``;

export const TitleEmpty = styled.Text`
  font-size: 22px;
  font-family: ${fonts.medium};
  color: ${colors.purple};
  margin-top: 40px;
  text-align: center;
`;

export const TextEmpty = styled.Text`
  font-size: 17px;
  font-family: ${fonts.light};
  color: ${colors.gray};
  margin-top: 12px;
  text-align: center;
  line-height: 24px;
`;

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  padding: 36px 0;
  align-items: center;
  bottom: 0;
`;

export const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: -30px;
`;

