import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyledContainer } from "../../components/general";
import CustomHeader from "../../components/customHeader";
import { Text, View } from "native-base";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { startQuiz, updateAnswers } from "../../redux/actions/session";
import Loader from "../../components/loader";
import styled from "styled-components/native";
import { Question } from "../../redux/types/session";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { shuffleArray } from "../../utils/shuffleArray";
import { TouchableOpacity } from "react-native";
import { unescape } from "html-escaper";

const Quiz = () => {
  const dispatch = useDispatch();
  const [waiting, setWaiting] = useState(true);
  const navigation = useNavigation();

  const info = useSelector(
    (state: any) => state.sessionReducer.info,
    shallowEqual
  );

  const category = useSelector(
    (state: any) => state.sessionReducer.category,
    shallowEqual
  );

  const quizPayload = {
    ...info,
    category,
  };

  const preventBack = () => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("Stop Quiz?", "Are you sure you want to leave the quiz?", [
        {
          text: "No, don't leave",
        },
        {
          text: "Yes, leave quiz",
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    });
  };

  useEffect(() => {
    setWaiting(true);
    dispatch(startQuiz(quizPayload, onSuccess));
    // preventBack()
  }, []);

  const onSuccess = () => {
    setWaiting(false);
  };

  return (
    <StyledContainer>
      <CustomHeader title={"Quiz"} />
      {waiting ? <Loader /> : <MainQuiz />}
    </StyledContainer>
  );
};

const MainQuiz = () => {
  const dispatch = useDispatch();
  const { currentQuestion, info, questions, answers } = useSelector(
    (state: any) => state.sessionReducer,
    shallowEqual
  );
  const [options, setOptions] = useState<any>([]);

  const current: Question = questions[currentQuestion];

  console.log(current, "pppppppppppp", questions, currentQuestion);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    dispatch(updateAnswers(newAnswers));
  };

  useEffect(() => {
    const update = current?.correct_answer
      ? shuffleArray([...current.incorrect_answers, current.correct_answer])
      : [];
    setOptions(update);
  }, [current]);

  return (
    <>
      {current && (
        <StyledView>
          <QuestionText>
            {current.question && unescape(current.question)}
          </QuestionText>
          {options.map((opt: string, index: number) => (
            <Option
              option={opt}
              onAnswer={handleAnswer}
              selected={answers[currentQuestion] === opt}
            />
          ))}
        </StyledView>
      )}
    </>
  );
};

interface OptionType {
  option: string;
  onAnswer: Function;
  selected: boolean;
}

const Option = ({ option, onAnswer, selected }: OptionType) => {
  const handleAnswer = () => {
    onAnswer(option);
  };
  return (
    <OptionContainer onPress={handleAnswer} selected={selected}>
      <OptionText selected={selected}>{option}</OptionText>
    </OptionContainer>
  );
};

const OptionContainer = styled(TouchableOpacity)<{ selected: any }>`
  padding: 10px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  margin: 10px 0;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.text : theme.colors.background};
  border-radius: 4px;
`;

const StyledView = styled(View)`
  flex: 1;
  padding: 0 10px;
  padding-top: 40px;
`;
const StyledText = styled(Text)<{ theme: any }>`
  color: ${({ theme }) => theme.colors.text};
`;

const OptionText = styled(StyledText)<{ selected: boolean; theme: any }>`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.background : theme.colors.text};
`;

const QuestionText = styled(StyledText)`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

export default Quiz;
