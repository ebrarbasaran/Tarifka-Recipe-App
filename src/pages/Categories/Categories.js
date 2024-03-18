import React, { useEffect, useState } from "react";
import { View, FlatList,Text } from "react-native";
import styles from "./Categories.style";

import useFetch from '../../hooks/useFetch';
import ListItemCategories from "../../component/ListItemCategories/ListItemCategories";
import Loading from "../../component/Loading/Loading";
import Error from "../../component/Error";

const Categories = ({navigation}) => {
  const URL = process.env.EXPO_PUBLIC_API_URL + 'categories.php';
  const {loading,data,error} = useFetch(URL);

  const handleItemSelect = (category_name) => {
    navigation.navigate('Category', {category_name});
  };

  const renderList = ({ item }) => <ListItemCategories item={item} onSelect={() => handleItemSelect(item.strCategory)}/>;
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>I would like to cook</Text>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={data.categories}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
