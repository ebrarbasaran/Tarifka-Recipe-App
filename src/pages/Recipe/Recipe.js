import React from 'react';
import { View,Text } from 'react-native';
import useFetch from '../../hooks/useFetch';
import RecipeCard from '../../component/RecipeCard/RecipeCard';
import Loading from '../../component/Loading/Loading';
import Error from '../../component/Error';

const Recipe = ({route}) => {
    const {meal_id} = route.params
    const URL = process.env.EXPO_PUBLIC_API_URL + "lookup.php?i=";
    const {loading,data,error} = useFetch(`${URL}${meal_id}`);

    // console.log(meal_id);
    //console.log(data.meals[0]);

    if(loading){
        return <Loading />;
    }
    if(error){
        return <Error />
    }

    return (
        <View>
            <RecipeCard recipe = {data.meals[0]}/>
        </View>
    );
}

export default Recipe;