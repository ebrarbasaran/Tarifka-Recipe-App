import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/pages/Home';
import Categories from './src/pages/Categories';
import Category from './src/pages/Category';
import Recipe from './src/pages/Recipe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Categories" component={Categories} options={{
          headerTitleStyle: {color: '#C0091E'},
          headerTintColor: '#C0091E',
        }}/>
        <Stack.Screen name="Category" component={Category} options={{
          headerTitleStyle: {color: '#C0091E'},
          headerTintColor: '#C0091E',
        }}/>
        <Stack.Screen name="Recipe" component={Recipe} options={{
          headerTitleStyle: {color: '#C0091E'},
          headerTintColor: '#C0091E',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
