import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NotLogged = () => {

    const navigation = useNavigation<any>()
    return (
        <View style={styles.content}>
            <Text style={styles.text}>You need to make Log In</Text>
            <Button title='Go to Log In' onPress={() => navigation.navigate('account')}/>
        </View>
    )
}

export default NotLogged

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        textAlign:'center',
        marginBottom: 10
    }
});