import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, Alert } from 'react-native';
import React from 'react';
import ReactNativeBiometrics from 'react-native-biometrics'; // Importer la bibliothèque biométrique
import Appstyles from '../Assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importer l'icône

const Home = ({ navigation }) => {

  const handleFingerprintAuth = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    // Vérifier si l'empreinte digitale est disponible
    const available = await rnBiometrics.isSensorAvailable();
    Alert.alert('Authentification réussie');
    console.log("Biometric sensor available:", available); // Log supplémentaire
    if (available.available) {
      console.log("Confirmez votre empreinte digitale");
      
      // Demander à l'utilisateur de s'authentifier via empreinte digitale
      rnBiometrics.simplePrompt({ promptMessage: 'Confirmez votre empreinte digitale' })
        .then((result) => {
          console.log("Fingerprint prompt result:", result); // Log du résultat
          const { success } = result;
          if (success) {
            Alert.alert('Authentification réussie', 'Vous êtes connecté');
            // Naviguer vers un autre écran si l'authentification est réussie
            navigation.navigate('Dashboard');
          } else {
            Alert.alert('Échec de l\'authentification', 'Impossible de valider l\'empreinte digitale');
          }
        })
        .catch((error) => {
          console.log("Biometric authentication error:", error); // Log d'erreur
          Alert.alert('Erreur', 'Une erreur est survenue lors de l\'authentification');
        });
    } else {
      Alert.alert('Biométrie non disponible', 'Ce dispositif ne prend pas en charge l\'authentification par empreinte digitale');
    }
  };
  

  return (
    <ImageBackground
      source={require('../Assets/fondAcceuil.jpg')} // Remplace par le chemin de ton image
      style={Appstyles.Appcontener}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Image
        source={require('../Assets/APPLOGO1.png')} // Remplace par le chemin de ton image
        style={Appstyles.Applogo}
      />
      
      <View style={Appstyles.Vbouton}>
        <TouchableOpacity style={Appstyles.button2} >
          <Text style={Appstyles.buttonText}>SE CONNECTER</Text>
        </TouchableOpacity>
        
        {/* Ajouter un bouton avec icône empreinte */}
        <TouchableOpacity style={Appstyles.fingerprintButton} onPress={handleFingerprintAuth}>
             <Icon name="fingerprint" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
