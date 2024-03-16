import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./ListItem.style";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.strCategoryThumb }}  style={styles.image}/>
      <View style={styles.text_container}>
        <Text style =  {styles.text}>{item.strCategory}</Text>
      </View> 
    </View>
  );
};

export default ListItem;
