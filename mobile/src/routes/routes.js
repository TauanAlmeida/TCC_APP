import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import PublicRoutes from './public.routes';
import UserRoutes from './user.routes';
import TreinerRoutes from './treiner.routes';
import {useAuth} from '../contexts/auth';

const Routes = () => {
  const {user, loading, signed} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  console.log(user);
  if (user?.user?.userAccess === 1 && signed) {
    return <UserRoutes />;
  } else if (user?.user?.userAccess === 2 && signed) {
    return <TreinerRoutes />;
  } else if (user?.user?.userAccess === 3 && signed) {
    return <TreinerRoutes />;
  } else {
    return <PublicRoutes />;
  }
};

export default Routes;
