import AsyncStorage from "@react-native-async-storage/async-storage"
// import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'


export const addPokemonFavoriteApi = async (pokemon : any) => {
    try {
        const favorites = await getPokemonFavoriteApi()
        favorites.push(pokemon)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}
export const getPokemonFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    
        return response ? JSON.parse(response) : []
    } catch (error) {
        throw error
    }
}

export const isPokemonFavoriteApi = async (id: string) => {
    try {
        const response = await getPokemonFavoriteApi()
        const result = response.find((el: any) => el.id === id) 
        return result ? true : false
    } catch (error) {
        throw error
    }
}

export const removePokemonFavoriteApi = async (id: string) => {
    try {
        const favorites = await getPokemonFavoriteApi()
        const newFavorites = favorites.filter((el : any) => el.id !== id)        
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }
}