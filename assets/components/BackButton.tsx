import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
       <Entypo name="chevron-left" color="#000" size={s(20)} />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        width:s(32),
        height:s(32),
        borderRadius:s(32),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ECF0F4'

    }
})