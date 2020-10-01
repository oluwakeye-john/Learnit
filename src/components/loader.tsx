import { useTheme } from "@react-navigation/native";
import { Spinner, Text } from "native-base";
import React from "react";
import styled from "styled-components/native";

interface LoaderType {
  title?: string;
}

const Loader = ({ title = "Please wait" }: LoaderType) => {
  const theme = useTheme();
  return (
    <StyledView>
      <Spinner color={theme.colors.primary} />
      <Text>{title}</Text>
    </StyledView>
  );
};

export default Loader;

const StyledView = styled.View<{ theme: any }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
