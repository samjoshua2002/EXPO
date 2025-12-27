import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../assets/components/Avatar'
import BackButton from '../assets/components/BackButton'
import { s, vs } from 'react-native-size-matters'
import SocialSection from '../assets/components/SocialSection'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ContactScreen = () => {
    return (
        // header
        <View style={{ marginTop: vs(50), paddingHorizontal: s(20) }}>
            <View style={styles.header}>
                <BackButton />

                <Avatar />
            </View>
            <Text style={styles.contact}>Contact Us</Text>
            <View style={styles.socialcontainer}>

                <Text style={styles.text}>Social Media Platforms</Text>
                <SocialSection icon={<FontAwesome name="whatsapp" size={24} color="#1077AF" />} title="whatsapp" />
                <SocialSection icon={<FontAwesome name="twitter" size={24} color="#1077AF" />} title="Twitter" />
                <SocialSection icon={<FontAwesome name="instagram" size={24} color="#1077AF" />} title="Instagram" />
                <SocialSection icon={<FontAwesome name="facebook" size={24} color="#1077AF" />} title="Facebook" />
                <SocialSection icon={<FontAwesome name="snapchat-ghost" size={24} color="#1077AF" />} title="Snapchat" />



            </View>



        </View>

    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contact: {
        marginTop: s(25),
        fontSize: s(30),
        fontWeight: 'semibold',
        marginStart: s(0)

    },
    socialcontainer: {
        borderRadius: s(14),
        backgroundColor: '#F5F5FA',
        paddingHorizontal: s(18),
        paddingVertical: vs(15),
        marginTop: vs(22)

    },
    text: {
        fontWeight: 'semibold',
        fontSize: s(16),

    }

})