import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name="Dashboard" component={Dashboard}/>
    </AuthStack.Navigator>
);

export default AppRoutes;