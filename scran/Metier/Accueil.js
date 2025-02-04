import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, Animated, ImageBackground } from 'react-native';
import { categories } from '../../Data/datametieracceuilch'; // Importation des données
import { residences } from '../../Data/datametierresidence'; // Importation des données
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useRef } from 'react';

import Appstyles from '../../Assets/styles';

export default function Accueil() {
  const handleImagePress = (title) => {
    console.log(`Image cliquée : ${title}`);
  };

   

  return (
    
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
    
   <View style={styles.container}>
   <View style={{alignItems:'center'}}>
   <Text style={{
 marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic', 
    color: '#faf9f9',
    fontWeight: 'normal', 
    fontFamily: 'DancingScript',
    textAlign: 'center',
    textShadowColor: 'black', // Ombre
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 20,
    letterSpacing: 1, // Espacement des lettres
    textTransform: 'uppercase', // Majuscules


    paddingVertical: 10,
    paddingHorizontal: 30,
    overflow: 'hidden', // Cache tout contenu qui dépasse
}}>
  BIENVENUE À HTEL
</Text>
   </View>
   
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.cardsContainer}>
          {/* Carte 1 */}
          <View style={styles.card}>
            <MaterialIcons name="shield-moon" size={24} color="white" />
            <Text style={styles.cardText}>Gagnez des récompenses pour chaque nuit séjournée</Text>
          </View>

          {/* Carte 2 */}
          <View style={styles.card}>
            <MaterialIcons name="local-offer" size={24} color="white" />
            <Text style={styles.cardText}>Économisez plus grâce aux Prix membres</Text>
          </View>

          {/* Carte 3 */}
          <View style={styles.card}>
            <MaterialIcons name="event" size={24} color="white" />
            <Text style={styles.cardText}>Options d’annulation gratuite en cas de changement de programme</Text>
          </View>
        </View>
      </ScrollView>
    </View>


    <View style={Appstyles.Acccontener}>
      <View style={Appstyles.chcontener}>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <View key={index} style={Appstyles.imgchambre}>
           
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#706a6a'}}>{category.title}</Text>
            
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={Appstyles.horizontalScroll}
              >
                {category.images.map((image) => (
                  <TouchableOpacity
                    key={image.id}
                    onPress={() => handleImagePress(image.title)}
                    style={Appstyles.imageWrapper}
                  >
                    <ImageBackground
                      style={Appstyles.imageACC}
                      source={image.src}
                      onError={(error) => console.log('Erreur image:', error.nativeEvent.error)}
                    >
                    <View style={styles.badge}>
                    <Text style={styles.badgeText}>{image.title}</Text>
                    </View>
                  
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ))
        ) : (
          <Text>Aucune donnée de chambre trouvée</Text>
        )}
      </View>

      <View style={Appstyles.rdcontener}>
        {Array.isArray(residences) && residences.length > 0 ? (
          residences.map((residence, index) => (
            <View key={index} style={Appstyles.imgchambre}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#706a6a'}}>{residence.title}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={Appstyles.horizontalScroll}
              >
                {residence.images.map((image) => (
                  <TouchableOpacity key={image.id} onPress={() => handleImagePress(image.title)} style={Appstyles.imageWrapper}>
                    <ImageBackground
                      style={Appstyles.imageACC}
                      source={image.src}
                      onError={(error) => console.log('Erreur image:', error.nativeEvent.error)}
                    >
                    <View style={styles.badge}>
                    <Text style={styles.badgeText}>{image.title}</Text>
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ))
        ) : (
          <Text>Aucune donnée de résidence trouvée</Text>
        )}
      </View>

      {/* //--------EVENEMENTS ET RESTAURANT-------------- */}
      <View style={Appstyles.resteven}>
    
    <View style={Appstyles.card}>
      <TouchableOpacity>
            <MaterialIcons name="local-restaurant" size={24} color="white" />
            <Text style={styles.cardText}>notre restaurant</Text>
      </TouchableOpacity>
    </View>
    <View style={Appstyles.card}>
      <TouchableOpacity>
            <MaterialIcons name="emoji-events" size={24} color="white" />
            <Text style={styles.cardText}>Espace évènementiel </Text>
      </TouchableOpacity>
    </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#6e2b04', // Rouge principal
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
  },
  badge: {
    backgroundColor: '#6e2b04', // couleur bleue
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999, // pour un effet pill arrondi
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardsContainer: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyItems: 'center',
    paddingHorizontal:10,
    margin:15,
    paddingBottom:2,
  },
  card: {
    backgroundColor: '#1b0409', // Rouge foncé
    width: 250,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    margin:10,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingStart: 10, // Ajoute un petit padding au début pour éviter que ça colle trop
    paddingEnd: 10,   // Supprime l'excès d'espace après le dernier élément
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
  },
});