import React from "react";
import { ScrollView, Image, Text, Pressable,Linking } from "react-native";
import styles from "./RecipeCard.style";

const RecipeCard = ({ recipe }) => {

  const clickToYoutube = () => Linking.openURL(recipe.strYoutube);
  

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.header_text}>{recipe.strMeal}</Text>
      <Text style={styles.area_text}>{recipe.strArea}</Text>
      <Text style={styles.instructions_text}>{recipe.strInstructions}</Text>
      <Pressable onPress={clickToYoutube} style={styles.youtube_btn}>
        <Text style={styles.btn_text}>Watch on Youtube</Text>
      </Pressable>
    </ScrollView>
  );
};

export default RecipeCard;
