
import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const Avatar = () => {
  return (
    <Image source={{uri: 'https://i.pinimg.com/1200x/26/88/59/2688598a013974136fd4d0d2475ee665.jpg'}}
    style={styles.avatar}/>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar:{
        height:s(32),
        width:s(32),
        borderRadius:s(32)
    }
})