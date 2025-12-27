import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/Logo'
import LogoFooter from '../assets/LogoFooter'


const LogoPage = () => {
    return (
        <View style={styles.container}>
           
            <Logo />
            
            <LogoFooter style={styles.logobottom}/>
        </View>
    )
}

export default LogoPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logobottom:{
    position:'absolute',
bottom:0,
right:0,
  }
});