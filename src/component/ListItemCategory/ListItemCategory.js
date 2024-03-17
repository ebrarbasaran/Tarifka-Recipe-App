import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from './ListItemCategory.style';

const ListItemCategory = ({ meal }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.image}>
        <View style={styles.text_container}>
            <Text style={styles.text}>{meal.strMeal}</Text>
        </View>   
      </ImageBackground>
    </View>
  );
};
export default ListItemCategory;
