/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import Button from 'react-native-paper/src/components/Button';
import {HelperText, Modal} from 'react-native-paper';
import theme from '../../styles/theme';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../contexts/auth';

import api from '../../services/api';

import {Formik} from 'formik';
import * as Yup from 'yup';

const UserSchema = Yup.object({
  email: Yup.string()
    .email('Insira um email válido (e.g example@mail.com)')
    .required('Email é um campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter 6 ou mais caracteres')
    .required('Senha é um campo obrigatório'),
});

const Login = ({navigation}) => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [EyeIcon, setEyeIcon] = useState('eye');
  const {signIn} = useAuth();

  function handleEyeIcon() {
    EyeIcon !== 'eye-off'
      ? (setEyeIcon('eye-off'), setHiddenPassword(false))
      : (setEyeIcon('eye'), setHiddenPassword(true));
  }

  function handleSignIn(values) {
    console.log(values);
    setIsLoading(true);
    api
      .post('/auth', values)
      .then((response) => {
        console.log('entroou');
        signIn(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.data) {
          setError(err.response.data);
        }
        console.log({
          name: 'handleSignin',
          error: err.response || err.message,
        });
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => handleSignIn(values)}
        validationSchema={UserSchema}>
        {(props) => (
          <>
            <View style={{flexDirection: 'column', width: '100%'}}>
              <TextInput
                label="Email"
                style={styles.input}
                error={props.touched.email && props.errors.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                selectionColor={theme.btnColorPrimary}
                underlineColor="white"
                keyboardType="email-address"
                theme={{
                  colors: {
                    placeholder: 'white',
                    primary: 'white',
                    text: 'white',
                    error: '#EB5757',
                  },
                }}
              />
              {props.touched.email && props.errors.email && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.email}
                </HelperText>
              )}

              <View
                style={{
                  position: 'relative',
                }}>
                <TextInput
                  label="Senha"
                  secureTextEntry={hiddenPassword}
                  style={styles.input}
                  error={props.touched.password && props.errors.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  selectionColor={theme.btnColorPrimary}
                  underlineColor="white"
                  theme={{
                    colors: {
                      placeholder: 'white',
                      primary: 'white',
                      text: 'white',
                      error: '#EB5757',
                    },
                  }}
                />
                <Icon
                  color="white"
                  size={18}
                  name={EyeIcon}
                  onPress={() => handleEyeIcon()}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 28,
                  }}
                />
              </View>
              {props.touched.password && props.errors.password && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.password}
                </HelperText>
              )}

              <View style={styles.linksContainer}>
                <TouchableHighlight
                  onPress={() => navigation.navigate('RecoverAccount')}>
                  <View>
                    <Text style={styles.links}>Recuperar senha?</Text>
                  </View>
                </TouchableHighlight>
              </View>
              {/* Invalid email or password */}
              {error ? (
                <Text
                  style={[
                    styles.errors,
                    {textAlign: 'center', marginVertical: 5},
                  ]}>
                  Email ou senha inválidos
                </Text>
              ) : null}
              <Button
                mode="contained"
                onPress={props.handleSubmit}
                style={theme.buttonStyle}
                color={theme.btnColorPrimary}
                loading={isloading}
                dark>
                Login
              </Button>
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Register')}>
              <View style={styles.cadastrase}>
                <Text style={styles.links}>
                  Não possui conta?{' '}
                  <Text style={styles.textUnderLine}>Cadastre-se</Text>
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;

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
  textUnderLine: {
    textDecorationLine: 'underline',
  },
  cadastrase: {
    position: 'absolute',
    bottom: 20,
  },
  errors: {
    color: '#EB5757',
  },
});
