import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardMain = ({isNext, tempo, distancia, pausa, tiros}) => {
  const title = isNext ? 'Próximo treino' : 'Ultimo treino';
  const colorIcon = isNext ? '#56CCF2' : '#F2994A';
  const handleGradient = isNext
    ? ['#2F80ED', '#56CCF2']
    : ['#F2994A', '#F2C94C'];
  return (
    <View>
      <LinearGradient
        locations={[0, 1]}
        colors={handleGradient}
        style={styles.headerGradient}
        useAngle={true}
        angle={45}>
        <Icon name="run" size={30} color="#ffffff" />
        <Text style={styles.headerTitle}>{title}</Text>
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
    justifyContent: 'flex-start',
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
});

export default CardMain;
