import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',

    padding: 10,
  },
});

export default Loader;
