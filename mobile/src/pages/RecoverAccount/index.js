import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import Button from 'react-native-paper/src/components/Button';
import theme from '../../styles/theme';

const RecoverAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSendEmail}>
        Em instantes você receberá um email de confirmação com o código de
        recuperação.
      </Text>
      <View style={{flexDirection: 'column', width: '100%'}}>
        <TextInput
          label="Insira seu email"
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          selectionColor={theme.btnColorPrimary}
          underlineColor="white"
          theme={{
            colors: {placeholder: 'white', primary: 'white', text: 'white'},
          }}
        />

        <Button
          mode="contained"
          onPress={() => {}}
          style={theme.buttonStyle}
          color={theme.btnColorPrimary}
          dark>
          Recuperar
        </Button>
      </View>
    </View>
  );
};

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
  input: {
    color: 'white',
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
  links: {
    color: 'white',
  },
  cadastrase: {
    position: 'absolute',
    bottom: 20,
  },
  textSendEmail: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
  },
});

export default RecoverAccount;
