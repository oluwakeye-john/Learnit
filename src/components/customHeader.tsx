import React from "react";
import { Body, Button, Header, Left, Right, Text, Title } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";

const CustomHeader = ({ title }: any) => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    // <Header
    //   style={{ backgroundColor: theme.colors.background }}
    //   androidStatusBarColor="#000"
    //   iosBarStyle="light-content"
    // >
    //   <Left style={{ flex: 1 }}>
    //     <StyledButton
    //       transparent
    //       onPress={() => {
    //         navigation.goBack();
    //       }}
    //     >
    //       {route.name !== "Home" && (
    //         <MaterialIcons
    //           color={theme.colors.text}
    //           name="chevron-left"
    //           size={25}
    //         />
    //       )}
    //     </StyledButton>
    //   </Left>
    //   <Body style={{ flex: 1 }}>
    //     <HeaderText>{title}</HeaderText>
    //   </Body>
    //   <Right style={{ flex: 1 }}></Right>
    // </Header>
    <></>
  );
};

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
`;

const HeaderText = styled(Title)`
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.text};
`;

export default CustomHeader;
