import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Header'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <View>
                <Text>Welcome to home component</Text>
            </View>
        </SafeAreaView>

    )
}

export default Home