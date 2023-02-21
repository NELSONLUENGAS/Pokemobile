import { View, Text, Button, StyleSheet } from 'react-native'
import React,  { useCallback, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import { getPokemonFavoriteApi } from '../../api/favorite'

const UserPanel = () => {

  const { user, logout } = useAuth()
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(
      () => {
        (
          async () => {
            try {
              const response = await getPokemonFavoriteApi()
              setTotal(size(response))
            } catch (error) {
              setTotal(0)
            }
          }
        )()
      },
      [],
    )
  )


  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>{`${user?.username}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Name' text={`${user?.firstname} ${user?.lastname}`}/>
        <ItemMenu title='Username' text={`${user?.username}`}/>
        <ItemMenu title='Email' text={`${user?.email}`}/>
        <ItemMenu title='My favorites' text={`${total} Pokemons`} />
      </View>

      {logout && 
        <Button title='Log out' onPress={() => logout()}/>
      }
    </View>
  )
}

export default UserPanel

type ItemMenu = {
  title: string,
  text: string
}

const ItemMenu = (props: ItemMenu) => {
  const {title, text } = props

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlock: {
    marginBottom: 30
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20,
  }, 
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF'
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  }
});