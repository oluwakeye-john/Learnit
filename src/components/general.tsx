import React from "react";
import styled from "styled-components/native";
import { Container, Content } from "native-base";

export const StyledContainer = styled(Container)`
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledContent = styled(Content)`
  background-color: ${({ theme }) => theme.colors.background};
`;
