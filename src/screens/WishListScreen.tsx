import { StyleSheet, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import  useAuth  from '../hooks/useAuth'
import { getPokemonFavoriteApi } from '../api/favorite'
import PokemonList from '../components/PokemonList'
import { useFocusEffect } from '@react-navigation/native'
import NotLogged from '../components/NotLogged'


const WishListScreen = () => {

  const [pokemons, setPokemons] = useState([])
  const { user } =  useAuth()

  useFocusEffect(
    useCallback(() => {
      if(user){
        (async () => {
          const response = await getPokemonFavoriteApi()
          setPokemons(response)
        })()
      }
    }, [user])
  )
  
  return (
    <>
    {!user ? <NotLogged/> : <PokemonList pokemonList={pokemons} />}
    {user && !pokemons.length && <Text style={styles.emptyTitle}>You don't have favorite Pokemons added</Text>}
    </>
  )
}

export default WishListScreen

const styles = StyleSheet.create({
  emptyTitle: {
    flex: 1,
    textAlign: 'center'
  }
});