import React from "react";
import { View, Text, Pressable  } from "react-native";
import styles from "./Home.style";
import LottieView from "lottie-react-native";

const Home = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("Categories");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe App</Text>
      <LottieView
        source={require("../../assets/cooking.json")}
        style={{ width: "100%", height: 350 }}
        autoPlay
      />
      <View style={styles.inner_container}>
        <View  style={styles.text_container}>
          <Text style={styles.text}>Start</Text>
          <Text style={styles.text}>Cooking</Text>
        </View>

        <View style={styles.btn_container}>
          <Pressable 
            onPress={handleClick}
            style={styles.button}
            >
                <Text style={styles.btn_text}>Category</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
