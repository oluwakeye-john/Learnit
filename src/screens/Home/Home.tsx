import { useNavigation } from "@react-navigation/native";
import { Button, Container, Content, H1, Text, View } from "native-base";
import React from "react";
import styled from "styled-components/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StyledView>
        <StyledH1>Trivify</StyledH1>
        <StyledStartButton
          block
          onPress={() => {
            navigation.navigate("Category");
          }}
        >
          <Text>Start Quiz</Text>
        </StyledStartButton>
      </StyledView>
    </Container>
  );
};

const StyledView = styled(View)`
  align-items: center;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledH1 = styled(H1)`
  margin: 20px 0;
`;

const StyledStartButton = styled(Button)`
  margin: 20px 0;
`;

export default Home;
