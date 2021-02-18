import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import {Avatar, Divider} from 'react-native-paper';

const UserAddTrainer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemWrapper}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={60}
              source={require('../../assets/Perfil.png')}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.nameTitle}>Tauan Almeida</Text>
            <View style={styles.divider} />
          </View>
        </View>
        <View style={styles.itemWrapper}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={60}
              source={require('../../assets/Perfil.png')}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.nameTitle}>Tauan Almeida</Text>
            <View style={styles.divider} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.bgColorPrimary,
  },
  avatarContainer: {
    width: 60,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
  },
  body: {
    flex: 1,
    position: 'relative',
    paddingTop: 15,
    paddingLeft: 15,
  },
  nameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    width: '100%',
    borderBottomColor: '#fff',
    borderBottomWidth: 0.4,
    position: 'absolute',
    bottom: 0,
  },
});

export default UserAddTrainer;
