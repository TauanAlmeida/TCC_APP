import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  Text,
} from 'react-native';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import Button from 'react-native-paper/src/components/Button';
import {HelperText} from 'react-native-paper';
import theme from '../../styles/theme';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import * as Yup from 'yup';
import {Formik} from 'formik';
import api from '../../services/api';
import {useAuth} from '../../contexts/auth';

const UserSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Nome não pode ter mais do que 15 caracteres')
    .min(3, 'Nome não pode ter menos do que 3 caracteres')
    .required('Nome é um campo obrigatório'),
  email: Yup.string()
    .email('Insira um email válido (e.g example@mail.com)')
    .required('Email é um campo obrigatório'),
  telephone: Yup.string()
    .required('Telefone é um campo obrigatório')
    .min(8, 'Telefone deve conter 8 ou mais caracteres'),
  userAccess: Yup.string().required('Perfil do usuário é um campo obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve conter 6 ou mais caracteres')
    .required('Senha é um campo obrigatório'),
  password_confirmation: Yup.string()
    .min(6, 'Senha deve conter 6 ou mais caracteres')
    .required('Senha é um campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'Senhas não conferem'),
});

export const Dropdown = (props) => {
  return (
    <View style={styles.pickerWrapper}>
      <Icon name="chevron-down" style={styles.pickerIcon} />
      <Picker
        selectedValue={props.value}
        style={styles.pickerContent}
        onValueChange={(itemValue) => {
          return (
            itemValue &&
            props.setFieldValue('userAccess', itemValue) &&
            props.setPerfil(itemValue)
          );
        }}>
        <Picker.Item label="Selecion um perfil..." value={null} />
        <Picker.Item label="Atleta" value="1" />
        <Picker.Item label="Fisioterapeuta" value="2" />
        <Picker.Item label="Treinador" value="3" />
      </Picker>
    </View>
  );
};

const themeInput = {
  colors: {
    placeholder: 'white',
    primary: 'white',
    text: 'white',
    error: '#EB5757',
  },
};

const Register = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [perfil, setPerfil] = useState(null);
  const [EyeIcon, setEyeIcon] = useState('eye');
  const [isloading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const {signIn} = useAuth();

  function handleEyeIcon() {
    EyeIcon !== 'eye-off'
      ? (setEyeIcon('eye-off'), setHiddenPassword(false))
      : (setEyeIcon('eye'), setHiddenPassword(true));
  }

  function setRegisterUser(values) {
    setIsLoading(true);
    values.userAccess = Number(values.userAccess);
    delete values.password_confirmation;
    api
      .post('/user', values)
      .then((response) => {
        signIn(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.data.error) {
          setApiError('E-mail já cadastrado');
        } else {
          setApiError('Ops! Aconteceu um erro, tente novamente.');
        }

        console.log(err.response.data);
        setIsLoading(false);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={{flexDirection: 'column', width: '100%'}}
        onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            telephone: '',
            userAccess: '',
            password: '',
            password_confirmation: '',
          }}
          onSubmit={(values) => setRegisterUser(values)}
          validationSchema={UserSchema}>
          {(props) => (
            <>
              <TextInput
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                error={props.touched.name && props.errors.name}
                label="Nome"
                style={styles.input}
                selectionColor={theme.btnColorPrimary}
                underlineColor="white"
                theme={themeInput}
              />
              {props.touched.name && props.errors.name && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.name}
                </HelperText>
              )}
              <TextInput
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                error={props.touched.email && props.errors.email}
                label="Email"
                style={styles.input}
                selectionColor={theme.btnColorPrimary}
                underlineColor="white"
                theme={themeInput}
              />
              {props.touched.email && props.errors.email && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.email}
                </HelperText>
              )}
              <TextInput
                onChangeText={props.handleChange('telephone')}
                onBlur={props.handleBlur('telephone')}
                value={props.values.telephone}
                error={props.touched.telephone && props.errors.telephone}
                label="Telefone"
                style={styles.input}
                selectionColor={theme.btnColorPrimary}
                underlineColor="white"
                theme={themeInput}
              />
              {props.touched.telephone && props.errors.telephone && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.telephone}
                </HelperText>
              )}
              <Dropdown value={perfil} setPerfil={setPerfil} {...props} />
              {props.touched.userAccess && props.errors.userAccess && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.userAccess}
                </HelperText>
              )}
              <View
                style={{
                  position: 'relative',
                }}>
                <TextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  error={props.touched.password && props.errors.password}
                  label="Senha"
                  secureTextEntry={hiddenPassword}
                  style={styles.input}
                  selectionColor={theme.btnColorPrimary}
                  underlineColor="white"
                  theme={themeInput}
                />
                <Icon
                  color="white"
                  size={18}
                  name={EyeIcon}
                  onPress={() => handleEyeIcon()}
                  style={styles.iconStyle}
                />
              </View>
              {props.touched.password && props.errors.password && (
                <HelperText style={styles.errors} type="error" visible={true}>
                  {props.errors.password}
                </HelperText>
              )}
              <View
                style={{
                  position: 'relative',
                }}>
                <TextInput
                  onChangeText={props.handleChange('password_confirmation')}
                  onBlur={props.handleBlur('password_confirmation')}
                  value={props.values.password_confirmation}
                  error={
                    props.touched.password_confirmation &&
                    props.errors.password_confirmation
                  }
                  label="Confirmar senha"
                  secureTextEntry={hiddenPassword}
                  style={styles.input}
                  selectionColor={theme.btnColorPrimary}
                  underlineColor="white"
                  theme={themeInput}
                />
                <Icon
                  color="white"
                  size={18}
                  name={EyeIcon}
                  onPress={() => handleEyeIcon()}
                  style={styles.iconStyle}
                />
              </View>
              {props.touched.password_confirmation &&
                props.errors.password_confirmation && (
                  <HelperText style={styles.errors} type="error" visible={true}>
                    {props.errors.password_confirmation}
                  </HelperText>
                )}
              <Text
                style={[
                  styles.errors,
                  {textAlign: 'center', width: '100%', marginTop: 3},
                ]}>
                {apiError}
              </Text>
              <Button
                mode="contained"
                onPress={props.handleSubmit}
                style={theme.buttonStyle}
                color={theme.btnColorPrimary}
                loading={isloading}
                dark>
                Cadastrar
              </Button>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    color: 'white',
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  iconStyle: {
    position: 'absolute',
    right: 10,
    top: 46,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  links: {
    color: 'white',
  },
  pickerWrapper: {
    marginTop: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  pickerIcon: {
    color: 'white',
    position: 'absolute',
    bottom: 15,
    right: 10,
    fontSize: 20,
  },
  pickerContent: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  errors: {
    color: '#EB5757',
  },
});

export default Register;
