import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./ListItemCategories.style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemCategories = ({ item,onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
      <Image source={{ uri: item.strCategoryThumb }}  style={styles.image}/>
      <View style={styles.text_container}>
        <Text style =  {styles.text}>{item.strCategory}</Text>
      </View> 
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemCategories;
