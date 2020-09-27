import { useTheme } from "@react-navigation/native";
import { Button, Container, Picker, Text, View, Content } from "native-base";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import CustomHeader from "../../components/customHeader";
import Loader from "../../components/loader";

const Options = () => {
  return (
    <Container>
      <CustomHeader title={"Physics"} />
      <Content>
        <StyledView>
          <Picker
            mode="dialog"
            placeholder="Hello world"
            note
            selectedValue={0}
          >
            <Picker.Item label="-- Number of Questions --" value={1} />
            <Picker.Item label="10" value={1} />
            <Picker.Item label="20" value={1} />
            <Picker.Item label="30" value={1} />
            <Picker.Item label="40" value={1} />
            <Picker.Item label="50" value={1} />
          </Picker>
          <Picker
            mode="dialog"
            placeholder="Hello world"
            note
            selectedValue={0}
          >
            <Picker.Item label="-- Difficulty --" value={1} />
            <Picker.Item label="Easy" value={1} />
            <Picker.Item label="Medium" value={1} />
            <Picker.Item label="Hard" value={1} />
          </Picker>
          <Picker mode="dialog" placeholder="Type" note selectedValue={0}>
            <Picker.Item label="-- Question Type --" value={1} />
            <Picker.Item label="Multiple Choice" value={1} />
            <Picker.Item label="True / False" value={1} />
            <Picker.Item label="Mixed" value={1} />
          </Picker>
          <Button block>
            <Text>Start</Text>
          </Button>
        </StyledView>
      </Content>
    </Container>
  );
};

const StyledView = styled(ScrollView)`
  padding: 20px;
  flex: 1;
`;

export default Options;
