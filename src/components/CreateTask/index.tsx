import React, { useState } from "react";
import { Modal, Image } from "react-native";
import { useDispatch } from 'react-redux';

import {
  Container,
  Content,
  Close,
  Out,
  Title,
  Input,
  ButtonAdd,
  TextButtonAdd,
  ContentButtonAdd,
} from "./styles";
import close from "@assets/images/close.png";
import colors from "@styles/colors";
import { addItemAction } from '@utils/dispatch';

interface CreateTaskType {
  visible: boolean;
  onClose: () => void;
}

export default function CreateTask({ visible, onClose }: CreateTaskType) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleCreateNewTask() {
    dispatch(addItemAction({
      id: 0,
      title
    }));
    onClose();
  }

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Container>
        <Out activeOpacity={1} onPress={onClose} />
        <Content>
          <Close onPress={onClose}>
            <Image source={close} />
          </Close>
          <Title>Adicionar nova tarefa</Title>
          <Input
            onChangeText={setTitle}
            autoFocus={true}
            placeholder="Título da tarefa"
          />
          <ButtonAdd onPress={handleCreateNewTask}>
            <ContentButtonAdd colors={colors.blueGradient}>
              <TextButtonAdd>Adicionar tarefa</TextButtonAdd>
            </ContentButtonAdd>
          </ButtonAdd>
        </Content>
      </Container>
    </Modal>
  );
}
