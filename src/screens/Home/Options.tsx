import { useNavigation } from "@react-navigation/native";
import { Button, Picker, Text, View, Content, Switch } from "native-base";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import CustomHeader from "../../components/customHeader";
import { StyledContainer, StyledContent } from "../../components/general";
import { updateOptions } from "../../redux/actions/session";
import { DIFFICULTY, QUESTION_TYPE } from "../../redux/types/session";
import CustomToast from "../../utils/showToast";
import { validateOptions } from "../../utils/validation";

const initial = {
  numberOfQuestions: 0,
  difficulty: DIFFICULTY.empty,
  questionType: QUESTION_TYPE.EMPTY,
};

enum INPUT_OPTIONS {
  numberOfQuestions = "numberOfQuestions",
  difficulty = "difficulty",
  questionType = "questionType",
}

const Options = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState(initial);

  const dispatch = useDispatch();

  const category = useSelector(
    (state: any) => state.sessionReducer.category,
    shallowEqual
  );

  navigation.setOptions({
    title: category.name,
  });

  const handleChange = (name: INPUT_OPTIONS, value: any) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(input);

    const error = validateOptions(input);
    if (error) {
      return CustomToast(error);
    }

    dispatch(updateOptions(input));
    navigation.navigate("Quiz");
  };

  return (
    <StyledContainer>
      <CustomHeader title={"Physics"} />
      <View style={{ flex: 1, position: "relative" }}>
        <StyledView>
          <StyledPicker
            mode="dialog"
            placeholder="Number of Questions"
            note
            selectedValue={input.numberOfQuestions}
            onValueChange={(value: any) =>
              handleChange(INPUT_OPTIONS.numberOfQuestions, value)
            }
          >
            <Picker.Item label="-- Number of Questions --" value={0} />
            <Picker.Item label="10 questions" value={10} />
            <Picker.Item label="20 questions" value={20} />
            <Picker.Item label="30 questions" value={30} />
          </StyledPicker>
          <StyledPicker
            mode="dialog"
            placeholder="Difficulty"
            note
            selectedValue={input.difficulty}
            onValueChange={(value: any) =>
              handleChange(INPUT_OPTIONS.difficulty, value)
            }
          >
            <Picker.Item label="-- Difficulty --" value={DIFFICULTY.empty} />
            <Picker.Item label="Easy" value={DIFFICULTY.easy} />
            <Picker.Item label="Medium" value={DIFFICULTY.medium} />
            <Picker.Item label="Hard" value={DIFFICULTY.hard} />
          </StyledPicker>

          <StyledPicker
            mode="dialog"
            placeholder="Type"
            note
            selectedValue={input.questionType}
            onValueChange={(value: any) =>
              handleChange(INPUT_OPTIONS.questionType, value)
            }
          >
            <Picker.Item label="-- Question Type --" value={DIFFICULTY.empty} />
            <Picker.Item
              label="Multiple Choice"
              value={QUESTION_TYPE.MULTIPLE}
            />
            <Picker.Item label="True / False" value={QUESTION_TYPE.BOOLEAN} />
            <Picker.Item label="Mixed" value={QUESTION_TYPE.MIXED} />
          </StyledPicker>
          <StyledButton block onPress={handleSubmit}>
            <Text>Start</Text>
          </StyledButton>
        </StyledView>
        <LowerView></LowerView>
      </View>
    </StyledContainer>
  );
};

const StyledPicker = styled(Picker)`
  margin: 5px 0;
`;

const StyledView = styled(ScrollView)`
  padding: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LowerView = styled(View)`
  /* position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px; */
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Options;
