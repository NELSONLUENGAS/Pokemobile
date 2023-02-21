import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type PokemobileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, 'pokemobile', 'pokemonDetail'>,
  NativeStackNavigationProp<any>
>;

export type IPokemobileStackParamList = {
    pokemobile: undefined,
    pokemonDetail: undefined
}

