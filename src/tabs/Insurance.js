import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Header'

const Insurance = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <View>
                <Text>Welcome to Insurance component</Text>
            </View>
        </SafeAreaView>

    )
}

export default Insurance