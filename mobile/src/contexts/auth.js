import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('Auth:user');
      const storagedToken = await AsyncStorage.getItem('Auth:token');

      if (storagedToken && storagedUser) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(
          storagedToken,
        )}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(userLoggedIn) {
    setUser(userLoggedIn);
    await AsyncStorage.setItem('Auth:user', JSON.stringify(userLoggedIn));
    await AsyncStorage.setItem(
      'Auth:token',
      JSON.stringify(userLoggedIn.token),
    );
    api.defaults.headers.Autorization = `Bearer ${userLoggedIn.token}`;
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, loading, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
