import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IPokemonCard } from '../models/pokemonsModel'
import { getColorByPokemonType } from '../utils/getColorByPokemonType'
import { capitalize } from 'lodash'
import { PokemobileScreenNavigationProp } from '../models/Navigation'



const PokemonCard = (props: IPokemonCard) => {

  const { pokemon } = props
  const navigation = useNavigation<PokemobileScreenNavigationProp> ()
  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type[0]),
    ...styles.bgStyle
  }
  const goToPokemon = () => {
    navigation.navigate('pokemonDetail', { pokemon: JSON.stringify(pokemon)})
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(2, '0')}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    width: 160,

  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 90,
    height: 90
  },
});