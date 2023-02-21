import { StyleSheet, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { IPokemons } from '../models/pokemonsModel'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type'
import Stats from '../components/pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome'
import Favorite from '../components/pokemon/Favorite'


const PokemonDetailScreen = (props: any) => {

    const { navigation, route: { params} } = props
    const pokemon: IPokemons = JSON.parse(params.pokemon)
    const { user } = useAuth()

    useEffect(() => {
      navigation.setOptions({
        headerRight: () => user && <Favorite pokemon={ pokemon}/>,
        headerLeft: () => 
            <Icon 
            name='arrow-left' 
            color={'#fff'} 
            size={20} 
            style={styles.icon}
            onPress={() => navigation.goBack()}
            />
      })
    }, [navigation, params, user])
    
   
    return (
        <ScrollView>
            <Header name={pokemon.name} order={pokemon.order} image={pokemon.image} type ={pokemon.type[0]}/>
            <Type types={pokemon.type}/>
            <Stats stats={pokemon.stats}/>
        </ScrollView>
    )
}

export default PokemonDetailScreen

const styles = StyleSheet.create({
    icon: {
        marginLeft: 5,
        paddingottom: 10
    }
})