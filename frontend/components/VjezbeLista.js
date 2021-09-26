import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PrikazVjezbe from "./PrikazVjezbe";
import {Button, StyleSheet, View, Text, FlatList} from 'react-native';
import {spremiKorisnika} from "../store/actions/korisnici"
const VjezbeLista = (props) => {
  //const fav= useSelector( state => state.vjezbe.favoritiVjezbe) //dohvati sve fav
  const dispatch = useDispatch()

  const prikaziVjezbe=(vjezba) =>
    {
      //const favStatus = fav.some ( v=> v.id === vjezba.item.id)
      return (
        <PrikazVjezbe 
        naziv={vjezba.item.naziv}
        odabir={()=> {
          props.navigation.navigate({
            routeName: 'Video',
            params:
             {
              id: vjezba.item.id,

              naziv:vjezba.item.naziv,
              kategorija:vjezba.item.kategorija,
              beginner:vjezba.item.beginner,
              intermediate:vjezba.item.intermediate,
              expert:vjezba.item.expert,
              oprema:vjezba.item.oprema,
              video: vjezba.item.videoId,
              //favStatus: favStatus,
             }
          })
        }}
        video={vjezba.item.videoId}
        />
      )
    }
    return( 
    <View style={stil.ekran}>
       <FlatList style={{width:'80%'}} 
       data={props.listaPodaci} 
       renderItem={prikaziVjezbe} />
      
      <Button title= 'Odjava' 
      onPress={()=> { props.navigation.navigate('Login'), dispatch(spremiKorisnika(null,null)) }}/>
    </View>
    );
};

const stil= StyleSheet.create({
    ekran: {
        flex:1,
        alignItems:"center"
    }
})

export default VjezbeLista;