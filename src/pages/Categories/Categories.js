import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./Categories.style";
import axios from "axios";

import ListItem from "../../component/ListItem/ListItem";
import Loading from "../../component/Loading/Loading";
import Error from "../../component/Error";

const Categories = () => {
  const URL = process.env.EXPO_PUBLIC_API_URL;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: category_obj } = await axios.get(URL);
      setList(category_obj.categories);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const renderList = ({ item }) => <ListItem item={item} />;

  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={list}
        renderItem={renderList}
      />
    </View>
  );
};

export default Categories;
