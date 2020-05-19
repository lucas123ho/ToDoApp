import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Image } from "react-native";

import {
  Container,
  Header,
  ContainerHeader,
  ContainerText,
  Name,
  Count,
  Avatar,
  ContentEmpty,
  TitleEmpty,
  TextEmpty,
  Footer,
  DetailFooter,
  ButtonAdd
} from "./styles";
import bgHeader from "@assets/images/bg_header.png";
import prancheta from "@assets/images/prancheta2.png";
import button from '@assets/images/button.png';
import CreateTask from '@components/CreateTask';
import { ApplicationState } from "@root/store";

export default function Home() {
  const [modalCreateTaskVisible, setModalCreateTaskVisible] = useState(false);
  const { itens } = useSelector((state: ApplicationState) => state.list);

  useEffect(() => {
    console.log(itens);
  }, []);

  return (
    <Container>
      <Header source={bgHeader}>
        <ContainerHeader>
          <ContainerText>
            <Name>Olá Julius!</Name>
            <Count>Você não tem nenhuma tarefa hoje</Count>
          </ContainerText>
          <Avatar
            source={{
              uri:
                "https://imagens1.ne10.uol.com.br/blogsne10/social1/uploads/2020/03/Terry-Crews-canta-Gloria-Gaynor-para-espantar-coronav%C3%ADrus-1170x780.jpg",
            }}
          />
        </ContainerHeader>
      </Header>
      <ContentEmpty
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: 45,
        }}
      >
        <Image source={prancheta} />
        <TitleEmpty>Nenhuma tarefa</TitleEmpty>
        <TextEmpty>Clique no "+" para adicionar uma nova tarefa</TextEmpty>
      </ContentEmpty>
      <Footer>
        <ButtonAdd onPress={() => setModalCreateTaskVisible(true)}>
          <Image source={button} />
        </ButtonAdd>
        <DetailFooter />
      </Footer>
      <CreateTask visible={modalCreateTaskVisible} onClose={() => setModalCreateTaskVisible(false)} />
    </Container>
  );
}
