import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import theme from '../../styles/theme';
import Header from '../../components/HeaderScreen/index';
import CardHistory from '../../components/CardMHistory';

const DATA = [
  {
    id: 1,
    bike: true,
    tempo: '01:00',
    distancia: '4,96KM',
    pausa: '00:10',
    tiros: '5x 200m',
  },
  {
    id: 2,
    bike: true,
    tempo: '01:00',
    distancia: '4,96KM',
    pausa: '00:10',
    tiros: '5x 200m',
  },
  {
    id: 3,
    bike: false,
    tempo: '01:00',
    distancia: '4,96KM',
    pausa: '00:10',
    tiros: '5x 200m',
  },
  {
    id: 4,
    bike: false,
    tempo: '01:00',
    distancia: '4,96KM',
    pausa: '00:10',
    tiros: '5x 200m',
  },
];

const History = (props) => {
  const renderItem = (data) => (
    <CardHistory
      bike={data.item.bike}
      tempo={data.item.tempo}
      distancia={data.item.distancia}
      pausa={data.item.pausa}
      tiros={data.item.tiros}
    />
  );
  return (
    <View style={styles.container}>
      <Header title="Histórico" {...props} />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorPrimary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default History;
