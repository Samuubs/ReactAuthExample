import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
           <View style={{flex: 1 , alignItems: "center", justifyContent: "center"}}>
               <ActivityIndicator size="large" color="#000"/>
           </View> 
        )
    }

    return signed ?  <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;