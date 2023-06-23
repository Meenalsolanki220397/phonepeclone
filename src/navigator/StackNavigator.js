import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Profile from '../components/Profile';
import ScanAndPay from '../components/ScanAndPay';
import Notification from '../components/Notification';
import Help from '../components/Help';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ScanAndPay" component={ScanAndPay} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    );
};

export default StackNavigator;