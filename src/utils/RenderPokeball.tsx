import { Image, StyleSheet } from 'react-native'
import React from 'react'

const RenderPokeball = () => {
  return (
    <Image style={styles.image} source={require('../assets/pokeball.png')} /> 
  )
}

export default RenderPokeball

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    top: -15
  }
});