import React from "react";
import { ViewProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import {
  Container,
  Content,
  TextDate,
  Title,
  ContainerRemove,
  ButtonRemove,
} from "./styles";
import colors from "@styles/colors";
import { cut } from "@utils/functions";
import { toggleCheckItemAction, removeItemAction } from "@utils/dispatch";

interface ItemProps extends ViewProps {
  id: number;
  title?: string;
  date?: string;
  checked?: boolean;
}

export default function Item({
  checked = false,
  title,
  date,
  id,
  ...rest
}: ItemProps) {
  const dispatch = useDispatch();

  function handleCheckItem() {
    dispatch(toggleCheckItemAction({ id }));
  }

  function handleRemoveItem() {
    dispatch(removeItemAction({ id }));
  }

  return (
    <Container {...rest}>
      <Content
        checked={checked}
        onPress={handleCheckItem}
        style={{
          shadowColor: "rgba(0,0,0,0.1)",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <MaterialIcons
          name={checked ? "check-circle" : "radio-button-unchecked"}
          size={18}
          color={checked ? colors.green : colors.darkGray}
        />
        <TextDate>{date}</TextDate>
        <Title
          style={{
            textDecorationStyle: "solid",
            textDecorationLine: checked ? "line-through" : "none",
            color: !checked ? colors.purple : colors.darkGray
          }}
        >
          {cut(title, 22, "...")}
        </Title>
      </Content>
      <ContainerRemove onPress={handleRemoveItem}>
        <ButtonRemove>
          <Feather name="trash-2" size={16} color={colors.strongRed} />
        </ButtonRemove>
      </ContainerRemove>
    </Container>
  );
}
