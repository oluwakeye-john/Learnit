import { useNavigation } from "@react-navigation/native";
import { Container, List, Text, ListItem, Content, Badge } from "native-base";
import React, { useEffect, useState } from "react";
import { ScrollView, RefreshControl, FlatList, View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import CustomHeader from "../../components/customHeader";
import Loader from "../../components/loader";
import { getCategoriesAction } from "../../redux/actions/category";
import { updateSelectedCategory } from "../../redux/actions/session";
import { CategoryType } from "../../redux/types/session";

const Item = ({ item, handleClick }: any) => {
  return (
    <ListItem noBorder onPress={() => handleClick(item)}>
      <StyledBadge>
        <BadgeText>{item.name[0]}</BadgeText>
      </StyledBadge>
      <StyledText>{item.name}</StyledText>
    </ListItem>
  );
};

const Category = () => {
  const navigation = useNavigation();
  const allCategories = useSelector(
    (state: any) => state.sessionReducer.allCategories,
    shallowEqual
  );

  const dispatch = useDispatch();

  const updateList = () => {
    setRefreshing(true);
    dispatch(getCategoriesAction(onFetch));
  };

  const onFetch = () => {
    setRefreshing(false);
  };

  useEffect(() => {
    updateList();
  }, []);

  const handleClick = (item: CategoryType) => {
    dispatch(updateSelectedCategory(item));
    navigation.navigate("Options");
  };

  const [refreshing, setRefreshing] = useState(false);

  return (
    <StyledContainer>
      <CustomHeader title={"Categories"} />
      {allCategories.length ? (
        <View>
          <List
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={updateList} />
            }
            dataArray={allCategories}
            renderItem={(props: any) => (
              <Item {...props} handleClick={handleClick} />
            )}
          />
        </View>
      ) : (
        <Loader />
      )}
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

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const BadgeText = styled(Text)`
  color: #fff;
`;

export default Category;
