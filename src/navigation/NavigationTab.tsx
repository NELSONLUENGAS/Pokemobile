import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RenderPokeball from '../utils/RenderPokeball'
import WishlistNavigaton from './WishlistNavigaton'
import PokemobileNavigation from './PokemobileNavigation'
import AccountNavigation from './AccountNavigation'

const NavigationTab = () => {

    
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName='Pokemobile'>
            <Tab.Screen  name='Wishlist' component={WishlistNavigaton} options={{
                unmountOnBlur: true,
                headerTitle: '',
                headerShown: false,
                tabBarIcon: ({color, size }) => <Icon name='heart' color={color} size={size}/> }}/>
            <Tab.Screen name='Pokemobile' component={PokemobileNavigation} options={{
                headerTitle: '',
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: () => RenderPokeball() 
            }}/>
            <Tab.Screen name='Account' component={AccountNavigation} options={{
                headerTitle: '',
                headerShown: false,
                tabBarIcon: ({color, size }) => <Icon name='user' color={color} size={size}/> }}/>
        </Tab.Navigator>
    )
}

export default NavigationTab