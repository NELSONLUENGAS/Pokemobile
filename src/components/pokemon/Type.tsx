import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {map, capitalize} from 'lodash'
import { ITypes } from '../../models/pokemonDetail'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

const Type = ({types}: ITypes) => {

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(item)}}>
          <Text>{capitalize(item)}</Text>
        </View>
      ))}
    </View>
  )
}

export default Type

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#f0f0'
  }
})