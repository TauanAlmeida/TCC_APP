import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
// import { Container } from './styles';

const Analytic = () => {
  return (
    <View style={styles.container}>
      <Text>Analitics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorPrimary,
  },
});

export default Analytic;
