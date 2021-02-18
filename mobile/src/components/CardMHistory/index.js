import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function handleIcon(bike) {
  return bike ? (
    <MaterialCommunityIcons name="bike" size={30} color="#ffffff" />
  ) : (
    <Icon name="run" size={30} color="#ffffff" />
  );
}

const CardHistory = ({bike, tempo, distancia, pausa, tiros}) => {
  const title = bike ? 'Bicicleta' : 'Corrida';
  const colorIcon = bike ? '#6FCF97' : '#56CCF2';
  const handleGradient = bike ? ['#219653', '#6FCF97'] : ['#2F80ED', '#56CCF2'];
  return (
    <View>
      <LinearGradient
        locations={[0, 1]}
        colors={handleGradient}
        style={styles.headerGradient}
        useAngle={true}
        angle={45}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {handleIcon(bike)}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textHours}>20:08AM</Text>
          <Text style={styles.textDate}>26 out 2020</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['#322F40', '#121212']}
        useAngle={true}
        angle={45}
        style={styles.content}>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <IconMaterial name="timer" size={20} color={colorIcon} />
            <Text style={styles.textContent}>Tempo</Text>
          </View>
          <Text style={styles.textSubContent}>{tempo}</Text>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={20}
              color={colorIcon}
            />
            <Text style={styles.textContent}>Distância</Text>
          </View>
          <Text style={styles.textSubContent}>{distancia}</Text>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <IconMaterial
              name="pause-circle-outline"
              size={20}
              color={colorIcon}
            />
            <Text style={styles.textContent}>Pausa</Text>
          </View>
          <Text style={styles.textSubContent}>{pausa}</Text>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <MaterialCommunityIcons
              name="run-fast"
              size={20}
              color={colorIcon}
            />
            <Text style={styles.textContent}>Tiros</Text>
          </View>
          <Text style={styles.textSubContent}>{tiros}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    height: 48,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '100',
    color: 'white',
    marginLeft: 5,
  },
  textContent: {
    fontSize: 14,
    marginLeft: 4,
    color: 'white',
  },
  textSubContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  contentItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentItemHeader: {
    flexDirection: 'row',
  },
  textHours: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDate: {
    color: 'white',
    fontSize: 14,
  },
});

export default CardHistory;
