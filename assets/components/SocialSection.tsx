import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SendButton from './SendButton'
import { s, vs } from 'react-native-size-matters'

interface SocialSectionProps {
    title: string;
    icon: React.ReactNode;
}

const SocialSection = (props: SocialSectionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {props.icon}

            </View>
            <Text style={styles.text}>{props.title}</Text>
            <SendButton />
        </View>
    )
}

export default SocialSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E4E6E8',
        borderBottomWidth: 1,
        paddingVertical: vs(15)

    },
    text: {
        marginStart: s(14),
        color: '#808383',
        flex: 1,
        fontSize: s(14)


    },
    circle: {
        height: s(46),
        width: s(46),
        borderRadius: s(40),
        backgroundColor: '#FFF',
        borderWidth: s(1),
        borderColor: '#1077AF',

        alignItems: 'center', justifyContent: 'center'
    }
})