import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, initializing } = useAuth();

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Chat" component={ChatScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
