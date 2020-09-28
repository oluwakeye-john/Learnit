import { useNavigation } from "@react-navigation/native";
import { Container, List, ListItem, Text, View } from "native-base";
import React, { useEffect } from "react";
import { ScrollView, StatusBar } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import CustomHeader from "../../components/customHeader";
import Loader from "../../components/loader";
import { getCategoriesAction } from "../../redux/actions/category";
import { CategoryType } from "../../redux/types/session";

const Category = () => {
  const navigation = useNavigation();
  const allCategories = useSelector(
    (state: any) => state.sessionReducer.allCategories,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const handleClick = (item: CategoryType) => {
    console.log(item);
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="light-content" translucent />
      <CustomHeader title={"Categories"} />
      <StyledView>
        {allCategories.length ? (
          <List>
            {allCategories.map((cat: CategoryType, index: number) => (
              <ListItem key={index} noBorder onPress={() => handleClick(cat)}>
                <StyledText>{cat.name}</StyledText>
              </ListItem>
            ))}
          </List>
        ) : (
          <Loader />
        )}
      </StyledView>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
`;

const StyledView = styled(ScrollView)`
  padding-top: 10px;
  flex: 1;
  margin-bottom: 10px;
`;

export default Category;
