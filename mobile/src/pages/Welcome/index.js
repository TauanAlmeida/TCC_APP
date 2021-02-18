import React from 'react';

import {View, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import Button from 'react-native-paper/src/components/Button';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={theme.buttonStyle}
        color={theme.btnColorPrimary}
        dark>
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Register')}
        style={theme.buttonStyle}
        color={theme.btnColorPrimary}
        dark>
        Cadastre-se
      </Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
