import React from "react";
import { Image } from "react-native";
import { useDispatch } from 'react-redux';

import {
  Container,
  Title,
  Text,
  Button,
  ContentButton,
  TextButton,
  Content,
} from "./styles";
import prancheta from "@assets/images/prancheta.png";
import colors from "@styles/colors";
import { routeAction } from '@utils/dispatch';

export default function Splash() {
  const dispatch = useDispatch();
  function handleRegisterUser() {
    dispatch(routeAction({
      registred: true
    }))
  }
  return (
    <Container>
      <Content>
        <Image source={prancheta} />
        <Title>Pronto para começar?</Title>
        <Text>
          Com nosso app você vai conseguir alcançar todos os seus objetivos e
          metas.
        </Text>
      </Content>
      <Button activeOpacity={0.5} onPress={handleRegisterUser}>
        <ContentButton
          colors={colors.greenGradient}
          start={[0.5, 0.5]}
          locations={[0, 0.9]}
        >
          <TextButton>Vamos lá?</TextButton>
        </ContentButton>
      </Button>
    </Container>
  );
}
