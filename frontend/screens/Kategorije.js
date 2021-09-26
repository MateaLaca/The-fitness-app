import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View ,FlatList } from "react-native";
import GridPrikaz from "../components/GridPrikaz"
import {useSelector, useDispatch} from 'react-redux';
import {dohvatiVjezbe} from "../store/actions/vjezbe"
import { DohvatiKorisnike } from "../store/actions/korisnici";
import {spremiKorisnika} from "../store/actions/korisnici"

const Kategorije = (props) => {
  
const dispatch = useDispatch()

useEffect(() => {
  dispatch(dohvatiVjezbe()) 
}, [dispatch])
useEffect(() => {
  dispatch(DohvatiKorisnike()) 
}, [dispatch])


const vjezbe= useSelector(state => state.vjezbe.vjezbe)
const kategorije = [...new Set(vjezbe.map(v => v.kategorija))]
  
  const renderGrid = (kategorije) => {
    return (
      <GridPrikaz 
      naziv={kategorije.item}
      odabir={ ()=> {
        props.navigation.navigate({
               routeName: 'JednaKategorija',
               params: {
                 katNaziv: kategorije.item
     } })  } }  
     />
 )}
 
   return (
    <View style={stil.ekran}>    
       <FlatList data={kategorije} renderItem={renderGrid} />
      <Button title= 'Odjava' 
   onPress={()=> { props.navigation.navigate('Auth') , dispatch(spremiKorisnika(null,null));
  }}/>
    </View>
   );
 };

 Kategorije.navigationOptions = (navData) => {
   return {
    HeaderTitle: "Sve kategorije",
    headerLeft: () => <Text onPress={()=>{
      navData.navigation.toggleDrawer()
     }}> MENU</Text> 
    }
   }
const stil = StyleSheet.create({
  gridElement: {
    flex: 1,
    margin: 0,
    height: 100,
    borderColor:'black',
    borderWidth:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#74F6F7',
  },
  video: {
    alignSelf: 'center',
    width: 520,
    height: 200,
  },
  ekran: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Kategorije;