import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WishListScreen from '../screens/WishListScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'

const WishlistNavigaton = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='wishlist' component={WishListScreen} options={{
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTitle: 'Wishlist',
                headerTitleAlign: 'center',
                statusBarColor: 'black',
                statusBarAnimation: 'fade'
            }}/>
            <Stack.Screen name='pokemonDetail' component={PokemonDetailScreen} options={{
                headerTitle: '',
                headerTransparent: true,
                statusBarColor: 'black',
                statusBarAnimation: 'fade',
            }}/>
        </Stack.Navigator>
    )
}

export default WishlistNavigaton