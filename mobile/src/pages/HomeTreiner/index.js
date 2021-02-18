import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from '../../styles/theme';

const HomeTreiner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Home Treiner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorPrimary,
  },
  textWhite: {
    color: 'white',
  },
});
export default HomeTreiner;
