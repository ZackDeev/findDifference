import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack, router } from 'expo-router'

const index = () => {


 setTimeout(()=>{
    router.replace('/game')
 },2000)

  return (
    <View>
        <Text>index</Text>
    </View>
  )
}

export default index