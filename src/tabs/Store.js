import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Header'

const Store = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <View>
                <Text>Welcome to store component</Text>
            </View>
        </SafeAreaView>

    )
}

export default Store