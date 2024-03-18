import React from "react";
import { View, FlatList } from "react-native";
import styles from './Category.style';
import useFetch from "../../hooks/useFetch";
import ListItemCategory from "../../component/ListItemCategory/ListItemCategory";
import Loading from "../../component/Loading/Loading";
import Error from "../../component/Error";

const Category = ({ route,navigation }) => {
  const { category_name } = route.params;
  const URL = process.env.EXPO_PUBLIC_API_URL + "filter.php?c=";
  const { loading, data, error } = useFetch(`${URL}${category_name}`);

  // console.log(`${URL}${category_name}`);
  // console.log(data);

  // console.log(category_name);

  const onPressMeal = (meal_id) => {
    navigation.navigate('Recipe', {meal_id});
  };

  const renderCategoryList = ({ item }) => <ListItemCategory meal={item} onPress= {() => onPressMeal(item.idMeal)}/>;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={data.meals}
        renderItem={renderCategoryList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default Category;
