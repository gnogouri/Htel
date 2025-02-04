import { View, Text, Image, ImageBackground, Button, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appstyles from '../Assets/styles';
const Home = ({ navigation }) => {
  return (
  
       <ImageBackground
       source={require('../Assets/fondAcceuil.jpg')}  // Remplace par le chemin de ton image
      style={Appstyles.Appcontener}
      resizeMode="cover" // Ajuste l'image (cover, contain, stretch, etc.)
    >
       <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Image
        source={require('../Assets/APPLOGO1.png')} // Remplace le chemin par celui de ton image
        style={Appstyles.Applogo}
      />
      <View style={Appstyles.textv}>
      <Text style={Appstyles.text}>AVANTAGES EXCLUSIFS</Text>
      <Text style={Appstyles.text}> POUR LES MEMBRES</Text>
    </View>
    <View style={Appstyles.Vbouton}>

      <TouchableOpacity style={Appstyles.button}>
        <Text style={Appstyles.buttonText}>ADHEREZ A HTEL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Appstyles.button2}>
        <Text style={Appstyles.buttonText}>SE CONNECTER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Appstyles.button1}
       onPress={() => navigation.navigate('Acceuil')}>
        <Text style={Appstyles.buttonText}>IGNORER</Text>
       
      </TouchableOpacity>
    </View>


    </ImageBackground>
  )
}

export default Home;