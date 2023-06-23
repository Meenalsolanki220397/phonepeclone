import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Ionicons, Feather, EvilIcons, MaterialIcons } from '@expo/vector-icons';

const Header = (props) => {
    const { navigation } = props;
    console.log("props navigation value", navigation);
    return (
        <SafeAreaView style={styles.headerWrapper}>
            <View style={styles.section}>
                <EvilIcons name="user" size={30} color="black" onPress={() => { navigation.navigate('Profile') }} />
                <Text style={styles.sectionText}>
                    welcome to header component
                </Text>
            </View>
            <View style={styles.section}>
                <MaterialIcons name="qr-code-scanner" size={24} color="black" style={styles.headerIcons}
                    onPress={() => { navigation.navigate('ScanAndPay') }} />
                <Ionicons name="notifications" size={24} color="black"
                    style={styles.headerIcons} onPress={() => { navigation.navigate('Notification') }} />
                <Feather name="help-circle" size={24} color="black"
                    style={styles.headerIcons} onPress={() => { navigation.navigate('Help') }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100 %',
        height: 40,
        backgroundColor: '#5624d0',
        marginTop: 50
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionText: {
        fontSize: 12,
        fontWeight: 900,
        padding: 3,
        color: 'white'
    },
    headerIcons: {
        padding: 2
    }
})

export default Header