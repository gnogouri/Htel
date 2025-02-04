import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './Metier/Accueil';
const Tab = createBottomTabNavigator();
const Acceuil = () => {
  return (
  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favoris') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#6e2b04' },
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={Accueil}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="les chambres" component={Accueil} />
        {/* <Tab.Screen name="les chambres" component={Accueil} /> */}
        {/* <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Profil" component={Profil} /> */}
      </Tab.Navigator>
 
  )
}

export default Acceuil