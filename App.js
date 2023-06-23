
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/tabs/Home';
import Store from './src/tabs/Store';
import Insurance from './src/tabs/Insurance';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons'
import ScanAndPay from './src/components/ScanAndPay';
import Profile from './src/components/Profile';
import Notification from './src/components/Notification';
import Help from './src/components/Help';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './src/navigator/StackNavigator';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#5624d0'
        },
      }}>
      <Tab.Screen component={Home} initialRouteName="" name="home" options={{
        tabBarIcon: (({ focused }) => {
          return (
            <Feather name="home" size={24} color={focused ? 'white' : 'black'} />
          )
        }),
        // extra styling will be done later
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   fontWeight: 900
        // }
      }} />
      <Tab.Screen component={Store} name='Stores' options={{
        tabBarIcon: (({ focused }) => {
          return (
            <MaterialIcons name="storefront" size={24} color={focused ? 'white' : 'black'} />
          )
        })
      }} />
      <Tab.Screen component={Insurance} name='Insurance' options={{
        tabBarIcon: (({ focused }) => {
          return (
            <AntDesign name="Safety" size={24} color={focused ? 'white' : 'black'} />
          )
        })
      }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer styles={styles.navigationWrapper}>
      {/* <Stack.Navigator>
        <Stack.Screen component={MyTab} name='Home' initialRouteName="" />
        <Stack.Screen component={Profile} name='profile' />
        <Stack.Screen component={ScanAndPay} name='scan' />
        <Stack.Screen component={Notification} name='notification' />
        <Stack.Screen component={Help} name='help' />
      </Stack.Navigator> */}

      <StackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  navigationWrapper: {
    flex: 1,
    backgroundColor: 'red'
  }
})

export default App

