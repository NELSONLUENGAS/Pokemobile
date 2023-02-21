import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import { IGetPokemons, IPokemons } from '../models/pokemonsModel'
import PokemonList from '../components/PokemonList'


const PokeMobileScreen = () => {
  
  const [pokemons, setPokemons] = useState<IPokemons[]>()
  const [nextUrl, setNextUrl] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])
  

  const loadPokemons = async () => { 
    try {
      const response: IGetPokemons = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray: IPokemons[] = []
      if(response.results?.length){
        for await (const pokemon of response.results){
          const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)
          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            type: pokemonDetail.types.map((type: any) => type.type.name),
            order: pokemonDetail.order,
            image: pokemonDetail.sprites.other['home']['front_default'],
            stats: pokemonDetail.stats
          })
        }
        if(pokemons?.length){
          setPokemons([...pokemons, ...pokemonsArray])
        }else{
          setPokemons(pokemonsArray)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      {
        pokemons?.length && 
        <PokemonList pokemonList={pokemons} loadPokemons={loadPokemons} isNext={typeof nextUrl === 'string'} />
      }
    </View>
  )
}

export default PokeMobileScreen