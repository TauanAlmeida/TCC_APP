import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../pages/Profile';
import History from '../pages/History';
import Analytic from '../pages/Analytic';
import Home from '../pages/Home';
import Trainer from '../pages/Trainer';
import UserAddTrainer from '../components/UserAddTrainer';
import theme from '../styles/theme';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={History}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Treino"
        component={Trainer}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <View style={styles.plusCircleIcon}>
              <Entypo name="plus" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Estatiticas"
        component={Analytic}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-line"
              color={color}
              size={size}
            />
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
      <Stack.Screen
        name="Treinador"
        component={UserAddTrainer}
        options={({navigation}) => ({
          headerTitle: 'Adicionar Treinador',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: theme.colorWhite,
          headerStyle: {backgroundColor: theme.bgColorSecondary},
          headerLeft: () => (
            <AntDesign
              style={styles.iconBack}
              name="left"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
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
  iconBack: {
    marginLeft: 10,
    marginTop: 5,
  },
});
