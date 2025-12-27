import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import { Icons } from '../Icons'

const SendButton = () => {
  return (
   <TouchableOpacity style={styles.circle}>
<Icons/>
   </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
    circle:{
        height:s(46),
        width:s(46),
        borderRadius:s(40),
        backgroundColor:'#1077AF',
        alignItems: 'center',justifyContent:'center'
    }
})