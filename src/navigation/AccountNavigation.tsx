import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'

const AccountNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='account' component={AccountScreen} options={{
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTitle: 'My Account',
                headerTitleAlign: 'center',
                statusBarColor: 'black',
                statusBarAnimation: 'fade'
            }}/>
        </Stack.Navigator>
    )
}

export default AccountNavigation