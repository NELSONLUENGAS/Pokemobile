import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokeMobileScreen from '../screens/PokeMobileScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'
import { IPokemobileStackParamList } from '../models/Navigation'

const PokemobileNavigation = () => {
  
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='pokemobile' component={PokeMobileScreen} options={{
                headerTitle: '',
                headerTransparent: true,
                statusBarColor: 'black',
                statusBarAnimation: 'fade'
            }}/>
            <Stack.Screen name='pokemonDetail'  component={PokemonDetailScreen} options={{
                headerTitle: '',
                headerTransparent: true,
                statusBarColor: 'black',
                statusBarAnimation: 'fade',
            }}/>
        </Stack.Navigator>
    )
}

export default PokemobileNavigation