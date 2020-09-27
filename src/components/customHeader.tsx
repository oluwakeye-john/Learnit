import React from "react";
import { Body, Button, Header, Left, Right, Text, Title } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

const CustomHeader = ({ title }: any) => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <Header
      style={{ backgroundColor: "#fff" }}
      androidStatusBarColor="#000"
      iosBarStyle="light-content"
    >
      <Left style={{ flex: 1 }}>
        <Button
          transparent
          onPress={() => {
            navigation.goBack();
          }}
        >
          {route.name !== "Home" && (
            <MaterialIcons name="chevron-left" size={25} />
          )}
        </Button>
      </Left>
      <Body style={{ flex: 1 }}>
        <HeaderText>{title}</HeaderText>
      </Body>
      <Right style={{ flex: 1 }}></Right>
    </Header>
  );
};

const HeaderText = styled(Title)`
  text-align: center;
  align-self: center;
  color: #000;
`;

export default CustomHeader;
