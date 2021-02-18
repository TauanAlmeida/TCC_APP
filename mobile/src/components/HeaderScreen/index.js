import React from 'react';
import {View, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderScreen = (props) => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
        <AntDesign name="left" size={24} color="white" />
      </TouchableWithoutFeedback>

      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    width: '90%',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
});

export default HeaderScreen;
