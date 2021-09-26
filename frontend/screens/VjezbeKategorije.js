import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import VjezbeLista from '../components/VjezbeLista'
import {useSelector} from 'react-redux';

const VjezbeKategorije = (props) => {
  const dioTijela=props.navigation.getParam('katNaziv')
  const dostupneVjezbe= useSelector(state => state.vjezbe.filtriraneVjezbe)
  const vjezbePrikaz= dostupneVjezbe.filter(vj=> vj.kategorija=== dioTijela)
  console.log(vjezbePrikaz)

  if (vjezbePrikaz.length ===0 || !vjezbePrikaz) 
  {
    return <View style= {stil.ekran}>
      <Text> Nema videa za prikaz. Provjeri odabrane filtere.</Text>
    </View>
  }
 return (
   <VjezbeLista 
   listaPodaci={vjezbePrikaz}
   navigation= {props.navigation} />
   )};

VjezbeKategorije.navigationOptions= (navigationData) => {
  const kat=navigationData.navigation.getParam('katNaziv')
  return { 
    headerTitle:kat 
  }}

  const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }  
});

export default VjezbeKategorije