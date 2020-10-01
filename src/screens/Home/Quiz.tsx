import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyledContainer } from "../../components/general";
import CustomHeader from "../../components/customHeader";
import { Badge, Button, Text, View } from "native-base";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  finishQuiz,
  setCurrentQuestion,
  startQuiz,
  updateAnswers,
} from "../../redux/actions/session";
import Loader from "../../components/loader";
import styled from "styled-components/native";
import { Question } from "../../redux/types/session";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { shuffleArray } from "../../utils/shuffleArray";
import { TouchableOpacity } from "react-native";
import { formatText } from "../../utils/formatText";
import { ScrollView } from "react-native-gesture-handler";
import Result from "./Result";
import { MaterialIcons } from "@expo/vector-icons";

const StopButton = () => {
  const navigation = useNavigation();
  const requestClose = () => {
    Alert.alert("End Quiz", "Are you sure you want to quit?", [
      {
        text: "Yes",
        onPress: () => navigation.navigate("Home"),
      },
      {
        text: "No",
      },
    ]);
  };
  return (
    <RightView transparent onPress={requestClose}>
      <MaterialIcons size={25} name="close" color="#fff" />
    </RightView>
  );
};

const Quiz = () => {
  const dispatch = useDispatch();
  const [waiting, setWaiting] = useState(true);
  const navigation = useNavigation();

  navigation.setOptions({
    headerRight: () => <StopButton />,
  });

  const info = useSelector(
    (state: any) => state.sessionReducer.info,
    shallowEqual
  );

  const showResult = useSelector(
    (state: any) => state.sessionReducer.showResult
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
      <Result open={showResult} />
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

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: {
        value: answer,
        isCorrect: answer === current.correct_answer,
      },
    };
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
          <ScrollView>
            <View style={{ alignSelf: "center" }}>
              <StyledBadge>
                <Text style={{ color: "#000" }}>
                  {currentQuestion + 1}/{questions.length}
                </Text>
              </StyledBadge>
            </View>
            <QuestionText>{formatText(current.question)}</QuestionText>
            {options.map((opt: any, index: number) => (
              <Option
                key={index}
                option={opt}
                onAnswer={handleAnswer}
                selected={answers[currentQuestion]?.value === opt}
              />
            ))}
            <Control />
          </ScrollView>
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
      <OptionText selected={selected}>{formatText(option)}</OptionText>
    </OptionContainer>
  );
};

const Control = () => {
  const dispatch = useDispatch();
  const { currentQuestion, info, questions, answers, score } = useSelector(
    (state: any) => state.sessionReducer,
    shallowEqual
  );
  const canGoNext = !(currentQuestion + 1 >= questions.length);
  const canGoPrevious = currentQuestion - 1 >= 0;

  const handleNext = () => {
    if (canGoNext) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    } else {
      dispatch(finishQuiz());
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
    }
  };
  return (
    <ControlContainer>
      <ControlButton disabled={!canGoPrevious} onPress={handlePrevious}>
        <ControlText>
          <MaterialIcons name="chevron-left" size={25} />
          {/* Previous */}
        </ControlText>
      </ControlButton>
      {/* <StyledText>{score}</StyledText> */}
      <ControlButton onPress={handleNext}>
        <ControlText>
          {canGoNext ? (
            <MaterialIcons name="chevron-right" size={25} />
          ) : (
            <MaterialIcons name="last-page" size={25} />
          )}

          {/* {canGoNext ? "Next" : "Submit"} */}
        </ControlText>
      </ControlButton>
    </ControlContainer>
  );
};

const ControlContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const ControlText = styled(Text)<{ theme: any }>`
  /* color: ${({ theme }) => theme.colors.text}; */
  color: #000;
  text-align: center;
`;

const ControlButton = styled(TouchableOpacity)<{ theme: any }>`
  padding: 10px;
  color: #000;
  text-align: center;
  width: 45%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const OptionContainer = styled(TouchableOpacity)<{ selected: any }>`
  padding: 10px;
  width: 100%;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  margin: 10px 0;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.background};
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

const StyledBadge = styled(Badge)<{ theme: any }>`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const OptionText = styled(StyledText)<{ selected: boolean; theme: any }>`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.background : theme.colors.text};
`;

const QuestionText = styled(StyledText)`
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 40px;
`;

const RightView = styled(Button)`
  margin-right: 20px;
`;

export default Quiz;
