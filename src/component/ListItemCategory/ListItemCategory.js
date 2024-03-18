import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from './ListItemCategory.style';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemCategory = ({ meal, onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.image}>
        <View style={styles.text_container}>
            <Text style={styles.text}>{meal.strMeal}</Text>
        </View>   
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default ListItemCategory;
