import React from 'react';
import {View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TreinerButton = ({color, size}) => {
  return (
    <View style={styles.plusCircleIcon}>
      <Entypo name="plus" color={color} size={size} />
    </View>
  );
};

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
export default TreinerButton;
