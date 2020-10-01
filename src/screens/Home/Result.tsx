import { Button, H1, Text, View } from "native-base";
import React from "react";
import { Modal } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { resetQuiz } from "../../redux/actions/session";
import { OptionsType } from "../../redux/types/session";

interface ResultType {
  open: boolean;
}

const Result = ({ open }: ResultType) => {
  const session = useSelector(
    (state: any) => state.sessionReducer,
    shallowEqual
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(resetQuiz());
  };

  const percent = (session?.score / session?.questions?.length) * 100;
  const attemped = Object.keys(session?.answers).length;

  return (
    <Modal animationType="slide" visible={open}>
      <StyledView>
        {/* <StyledText>SUCCESS</StyledText> */}
        <StyledText>Your quiz completed successfully</StyledText>
        <Score>{percent}%</Score>
        <StyledText>
          You attemped {attemped} questions and you got {session?.score}
        </StyledText>
        <StyledButton rounded block onPress={closeModal}>
          <StyledButtonText>Close</StyledButtonText>
        </StyledButton>
      </StyledView>
    </Modal>
  );
};

const StyledText = styled(Text)`
  margin: 10px 0;
  text-align: center;
  color: #aaa;
`;

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.text};
`;

const Score = styled(StyledH1)`
  font-size: 60px;
  line-height: 70px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledView = styled(View)`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 10px 0;
`;

const StyledButtonText = styled(StyledText)`
  color: #000;
`;

export default Result;
