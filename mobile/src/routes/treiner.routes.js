import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTreiner from '../pages/HomeTreiner';
import Profile from '../pages/Profile';
import theme from '../styles/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.bgColorSecondary,
          paddingVertical: 5,
          borderTopWidth: 0,
        },
        activeTintColor: theme.activeColorIcon,
        inactiveTintColor: 'white',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTreiner}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function StackAppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  plusCircleIcon: {
    backgroundColor: '#2F80ED',
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 3,
  },
});
