import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Accueil from './Metier/Accueil';
const Tab = createBottomTabNavigator();
const Acceuil = () => {
  return (
  
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIcon: ({ focused, color, size }) => {},
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#6e2b04' },
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={Accueil}
          options={{headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}

        />
        <Tab.Screen name="les chambres" component={Accueil} />
      </Tab.Navigator>
 
  )
}

export default Acceuil