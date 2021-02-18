import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../pages/Welcome';
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import RecoverScreen from '../pages/RecoverAccount';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Stack = createStackNavigator();

export default function PublicRoutes(props) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          headerTitle: 'Login',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: 'white',
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
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitle: 'Cadastro',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
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
      <Stack.Screen
        name="RecoverAccount"
        component={RecoverScreen}
        options={({navigation}) => ({
          headerTitle: 'Recuperar senha',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: 'white',
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
  iconBack: {
    marginLeft: 10,
    marginTop: 5,
  },
});
