import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import UserPanel from '../components/auth/UserPanel'
import useAuth from '../hooks/useAuth'

const AccountScreen = () => {

  const auth = useAuth().user


  return (
    <View>
      {auth ? <UserPanel/> : <LoginForm/> }
    </View>
  )
}

export default AccountScreen