import { ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { IPokemonList } from '../models/pokemonsModel'
import PokemonCard from './PokemonCard'


const PokemonList = (props: IPokemonList) => {
    

    const { pokemonList, loadPokemons, isNext } = props

    const loadMore = async () => {
        isNext && loadPokemons &&  await loadPokemons()
    }

    return (
        <FlatList
            data={pokemonList}
            numColumns={2}
            keyExtractor={ (pokemon, index) => String(index)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            onEndReached={loadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={
                isNext
                ? (
                    <ActivityIndicator
                        size={'large'}
                        style={styles.spinner}
                        color='#AEAEAE'
                    />
                ) : null
            }
        />
    )
}

export default PokemonList

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
});