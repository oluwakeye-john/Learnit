import React from "react";
import { StyledContainer } from "../../components/general";
import CustomHeader from "../../components/customHeader";
import { Text, View } from "native-base";

const Quiz = () => {
  return (
    <StyledContainer>
      <CustomHeader title={"Quiz"} />

      <View style={{ flex: 1, position: "relative" }}>
        <Text>Quiz</Text>
      </View>
    </StyledContainer>
  );
};

export default Quiz;
