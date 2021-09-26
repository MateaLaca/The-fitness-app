import React, {useState,useEffect} from 'react';
import VjezbeLista from '../components/VjezbeLista';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

const VjezbeFavoriti = (props) => {
  const [username, postaviUsername] = useState("")
  const [vjezbe, postaviVjezbe] = useState([])

  const stanjeKorisnici = useSelector( state => state.korisnici);

  let korisnik;
  useEffect ( () => {
    postaviUsername(stanjeKorisnici.username) 
  }, [stanjeKorisnici])
   
  useEffect ( () => {
    korisnik= stanjeKorisnici.korisnici.filter(obj=> obj.username == username)   
    if(korisnik[0] !== undefined){
      postaviVjezbe(korisnik[0].vjezbe);
    }
  }, [username])
  
  useEffect ( () => {console.log(vjezbe)}, [vjezbe])

 var videi = [];
 vjezbe.forEach(x => videi.push(x.videoId));


  if (videi.length ==0 || !videi) {
    return <View style = {stil.ekran}> 
      <Text> Nema omijenih vježbi.</Text>
      <Text> Počni vježbati i pronađi svoje favorite! </Text>
      </View>
  }
  
  return ( 
      <VjezbeLista listaPodaci={vjezbe} navigation= {props.navigation} />
    )};
  
VjezbeFavoriti.navigationOptions = (navData) => {
  return {
    headerTitle: "Omiljeni videi",
    headerLeft: () => 
      <Text onPress= {() =>{
      navData.navigation.toggleDrawer()}}> MENU </Text>
  }
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VjezbeFavoriti;