import { useNavigation } from "@react-navigation/native";
import { Button, Container, Content, H1, Text, View } from "native-base";
import React from "react";
import styled from "styled-components/native";
import { StyledContainer } from "../../components/general";

const Home = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Learnit",
    headerShown: false,
  });
  return (
    <StyledContainer>
      <StyledView>
        <StyledH1>Learnit</StyledH1>
        <StyledStartButton
          block
          onPress={() => {
            navigation.navigate("Category");
          }}
        >
          <Text>Start Quiz</Text>
        </StyledStartButton>
      </StyledView>
    </StyledContainer>
  );
};

const StyledView = styled(View)`
  align-items: center;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledH1 = styled(H1)`
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledStartButton = styled(Button)`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Home;
