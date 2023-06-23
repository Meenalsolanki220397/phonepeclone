import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons'

import Home from '../tabs/Home';
import Insurance from '../tabs/Insurance';
import Store from '../tabs/Store';


const Tab = createBottomTabNavigator();


const TabNavigator = ({ navigation }) => {
    // const TabScreen = ({ navigation }) => {
    //     // Pass the navigation prop to the custom header component
    //     React.useLayoutEffect(() => {
    //       navigation.setOptions({
    //         header: (props) => <CustomHeader {...props} navigation={navigation} />,
    //       });
    //     }, [navigation]);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: '#5624d0'
                },
            }}>
            <Tab.Screen component={Home} name="Home" navigation={navigation} options={{
                tabBarIcon: (({ focused }) => {
                    return (
                        <Feather name="home" size={24} color={focused ? 'white' : 'black'} />
                    )
                }),
                headerShown: false
                // extra styling will be done later
                // tabBarLabelStyle: {
                //   fontSize: 12,
                //   fontWeight: 900
                // }
            }} />
            <Tab.Screen component={Store} name='Stores' navigation={navigation} options={{
                tabBarIcon: (({ focused }) => {
                    return (
                        <MaterialIcons name="storefront" size={24} color={focused ? 'white' : 'black'} />
                    )
                }),
                headerShown: false
            }} />
            <Tab.Screen component={Insurance} name='Insurance' navigation={navigation} options={{
                tabBarIcon: (({ focused }) => {
                    return (
                        <AntDesign name="Safety" size={24} color={focused ? 'white' : 'black'} />
                    )
                }),
                headerShown: false
            }} />
        </Tab.Navigator>
    )
};

export default TabNavigator;