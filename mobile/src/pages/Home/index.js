import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import CardMain from '../../components/CardMain';
import RunnerImage from '../../components/RunnerImage';
import Loader from '../../components/Loader';
import {useAuth} from '../../contexts/auth';
import Button from 'react-native-paper/src/components/Button';
import api from '../../services/api';

const Home = ({navigation}) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user: data} = useAuth();
  const {user} = data;

  async function fetchData() {
    setLoading(true);
    try {
      const {data} = await api.get(`/training/user/${user._id}`);

      setExercises(data);
    } catch (error) {
      console.log({
        name: 'fetchData/home',
        error: error,
        response: error.response || error.message,
      });
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      {!loading ? (
        exercises.length ? (
          <>
            <CardMain
              isNext={true}
              tempo="01:10"
              distancia="4,96km"
              pausa="00:10"
              tiros="5x 200m"
            />
            <CardMain
              isNext={false}
              tempo={exercises[0].time}
              distancia={exercises[0].distance}
              pausa={exercises[0].pause}
              tiros={exercises[0].shots}
            />
          </>
        ) : (
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.textTitle}>Olá {user.name}!</Text>
              <Text style={styles.textRegular}>
                Vimos que você ainda não possuí um treinador. Cliquem em
                adicionar para começar!
              </Text>
              <View style={{flex: 1, marginTop: -80}}>
                <RunnerImage />
              </View>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('Perfil')}
                style={theme.buttonStyle}
                color={theme.btnColorPrimary}
                dark>
                Adicionar
              </Button>
            </View>
          </View>
        )
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColorPrimary,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  textTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 80,
  },
  textRegular: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default Home;
