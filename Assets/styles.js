import { StyleSheet} from 'react-native';

const Appstyles = StyleSheet.create({
  Appcontener:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#ebe6e6',
    flexDirection:'column',
  },
  Acccontener:{
 flex: 1,
    padding: 5,
    backgroundColor: '#f4f4f4', // Couleur de fond
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
  },
  chcontener:{
    marginBottom: 20, // Espacement entre les sections
  },
  rdcontener:{
    backgroundColor:'#e0dcdc',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    marginTop: 20, // Espacement pour la section des résidences
  },
  imageWrapper: {
    alignItems: 'center',
    marginRight: 15,
  },
  horizontalScroll: {
    flexGrow: 1, // Permet d'éviter que le ScrollView prenne toute la hauteur
  },
  Accueilcontener:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#cac7c7',
    flexDirection:'column',
  },
  Applogo:{
    width: 100, // Largeur de l'image
    height: 100, // Hauteur de l'image
    alignSelf: 'center', // Centre horizontalement
    marginTop: 20, // Espacement depuis le haut
  },
  imgchambre:{
marginTop: 20,
paddingHorizontal: 10,
  },
  text: {
    color: '#0e0101', // Couleur blanche
    fontWeight: 'bold', // Texte en gras
    fontSize: 18, // Taille du texte
    textShadowColor: '#8d8a8a', // Couleur de l'ombre (noire ici)
    textShadowOffset: { width: 3, height: 3 }, // Décalage de l'ombre
    textShadowRadius: 4, // Flou de l'ombre
  },
  imageACC: {
    width: 220,
    height: 150,
    borderRadius: 15, // Bordures arrondies
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Ombre sur Android
  },
  textv:{
    alignItems:'center',
  },
  Vbouton:{
   flexDirection: 'column', // Boutons empilés verticalement
  justifyContent: 'space-between', // Répartit les espaces verticaux si l'espace parent est suffisant
  width: '60%',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 30,
  gap: 20,
  },
 button: {
  backgroundColor: 'rgba(212, 214, 218, 0.8)', // Fond légèrement transparent
  width: '120%', 
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 20,
  alignItems: 'center',
  shadowColor: '#a7a1a1', // Ombre
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, // Ombre pour Android
},
  button2: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Couleur de fond
    paddingVertical: 12,
    width: '120%',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000', // Ombre
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  button1: {
     // Couleur de fond du bouton
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 25, // Espacement entre les boutons
    alignItems: 'center',
  },
  buttonText: {
    color: '#504f4f', // Couleur du texte (blanc)
    fontSize: 20, // Taille du texte
     fontWeight: 'bold',
    fontWeight: 'bold', // Texte en gras
  },
});

export default Appstyles;