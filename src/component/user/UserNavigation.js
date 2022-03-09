import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Hello from './screens/Hello';

import { UserContextProvider } from './UserContext';

const Stack = createNativeStackNavigator();


export default function UserNavigation() {
    return (

        <UserContextProvider>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:
                    {
                        backgroundColor: '#F67952'
                    },
                }}>
                <Stack.Screen component={Hello} name='Hello' />
                <Stack.Screen component={Login} name='Login' />
                <Stack.Screen component={SignUp} name='SignUp' />
            </Stack.Navigator>
        </UserContextProvider>
    );
}
