import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './scran/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from './scran/Acceuil';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Cache le header natif pour tous les écrans
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Acceuil" component={Acceuil} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;