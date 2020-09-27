import { useNavigation, useTheme } from "@react-navigation/native";
import { Container, List, ListItem, Text, View } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import CustomHeader from "../../components/customHeader";

const Category = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <CustomHeader title={"Category"} />
      <StyledView>
        <List>
          <ListItem onPress={() => navigation.navigate("Options")}>
            <Text>Physics</Text>
          </ListItem>
          <ListItem>
            <Text>Physics</Text>
          </ListItem>
        </List>
      </StyledView>
    </Container>
  );
};

const StyledView = styled(ScrollView)`
  padding: 20px;
  flex: 1;
`;

export default Category;
