import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme';

import Perfil from '../../assets/Perfil.png';
import {useAuth} from '../../contexts/auth';

const Profile = (props) => {
  const {signOut, user: data} = useAuth();

  const {user} = data;

  return (
    <View style={[styles.wrapper]}>
      <Provider>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require('../../assets/Rectangle.png')}
              style={styles.image}>
              <View style={styles.header}>
                <TouchableWithoutFeedback
                  onPress={() => props.navigation.goBack()}>
                  <AntDesign name="left" size={24} color="white" />
                </TouchableWithoutFeedback>

                <Text style={styles.title}>Perfil</Text>

                <MoreButton signOut={signOut} />
              </View>
              <View style={styles.userWrapper}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.userTell}>{user.telephone}</Text>
              </View>
              <View style={styles.userPhoto}>
                <Image source={Perfil} resizeMode="cover" />
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 100,
            }}>
            <View style={styles.TreinerMarginBottom}>
              <Text style={[styles.normalText, styles.textBold]}>
                Treinandor
              </Text>
            </View>
            <View style={styles.TreinerWrapper}>
              {user.treiner ? (
                <TouchableWithoutFeedback>
                  <View>
                    <Text style={styles.normalText}>Abrahm Lincoln</Text>
                    <FontAwesome name="trash" size={24} color="#EB5757" />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Button
                  mode="contained"
                  onPress={() => props.navigation.navigate('Treinador')}
                  style={styles.buttonStyle}
                  color={theme.btnColorPrimary}
                  dark>
                  Adicionar
                </Button>
              )}
            </View>
            <View style={styles.TreinerMarginBottom}>
              <Text style={[styles.normalText, styles.textBold]}>
                Fisioterapeuta
              </Text>
            </View>
            <View style={styles.TreinerWrapper}>
              {user.fisioterapeuta ? (
                <TouchableWithoutFeedback>
                  <View>
                    <Text style={styles.normalText}>Nelson Fitipaldi</Text>
                    <FontAwesome name="trash" size={24} color="#EB5757" />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Button
                  mode="contained"
                  onPress={() => {
                    props.navigation.navigate('Treinador');
                  }}
                  style={styles.buttonStyle}
                  color={theme.btnColorPrimary}
                  dark>
                  Adicionar
                </Button>
              )}
            </View>
          </View>
        </View>
      </Provider>
    </View>
  );
};

const MoreButton = ({signOut}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View style={{top: 2}}>
      <View
        style={{
          width: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableWithoutFeedback onPress={openMenu}>
              <MaterialIcons name="more-vert" size={24} color="white" />
            </TouchableWithoutFeedback>
          }>
          <Menu.Item onPress={() => {}} title="Editar perfil" />
          <Divider />
          <Menu.Item onPress={signOut} title="Sair" />
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.bgColorPrimary,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.bgColorSecondary,
    marginBottom: 15,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  imageWrapper: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  userWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  userEmail: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'lowercase',
    paddingVertical: 5,
  },
  userTell: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  userPhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: 16,
    alignSelf: 'center',
  },
  normalText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 25,
    letterSpacing: 0.3,
  },
  textBold: {
    fontWeight: 'bold',
  },
  TreinerWrapper: {
    width: '100%',
    backgroundColor: '#2C2938',
    paddingVertical: 7,
    marginBottom: 15,
    flexDirection: 'row',
    paddingRight: 15,
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
  },
  TreinerMarginBottom: {
    marginBottom: 3,
  },
  buttonStyle: {
    width: 'auto',
    alignSelf: 'center',
  },
});

export default Profile;
