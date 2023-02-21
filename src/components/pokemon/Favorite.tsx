import { View, Text } from 'react-native'
import React, { useState, useCallback } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi,isPokemonFavoriteApi, removePokemonFavoriteApi } from '.././../api/favorite'
import { useFocusEffect } from '@react-navigation/native'

const Favorite = ({ pokemon }: any) => {
    const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined)
    const [reloadCheck, setReloadCheck] = useState(false)
    const Icon = isFavorite ? FontAwesome : FontAwesome5

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                   const response = await isPokemonFavoriteApi(pokemon.id)
                   setIsFavorite(response)
                } catch (error) {
                    setIsFavorite(false)
                }
            })()
        }, [pokemon.id, reloadCheck])
    )
    
    const onReloadCheckFavorite = ()=> {
        setReloadCheck(!reloadCheck)
    }

    const addFavorite = async () => { 
        try {
            await addPokemonFavoriteApi(pokemon)
            onReloadCheckFavorite()
        } catch (error) {
            throw error
        }
    }

    const removeFavorite = async ()=> {
        await removePokemonFavoriteApi(pokemon.id)
        onReloadCheckFavorite()
    } 

    return (
        <>
        <Icon name='heart' color='#fff' size={20} onPress={!isFavorite ? addFavorite : removeFavorite } style={{ marginRight: 20 }}/>
        </>
    )
}

export default Favorite