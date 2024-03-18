import React from "react";
import { ScrollView, Image, Text } from "react-native";
import styles from "./RecipeCard.style";

const RecipeCard = ({ recipe }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.header_text}>{recipe.strMeal}</Text>
      <Text style={styles.area_text}>{recipe.strArea}</Text>
      <Text style={styles.instructions_text}>{recipe.strInstructions}</Text>
    </ScrollView>
  );
};

export default RecipeCard;
