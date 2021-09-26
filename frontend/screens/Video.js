import React, {useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {WebView } from 'react-native-webview';
import {useDispatch,useSelector} from 'react-redux';
import { PromjeniOmiljene } from '../store/actions/korisnici';
import {spremiKorisnika} from "../store/actions/korisnici";

const Video = (props) => {
  const [username, postaviUsername] = useState("")
  const [id, postaviId] = useState("")
  const [lajkani, postaviLajkane] = useState([]);
  const [kor, postaviKorisnika]=useState();


  const videoId=props.navigation.getParam("video")
  const idVjezbe= props.navigation.getParam('id');
  const naziv=props.navigation.getParam('naziv')
  const videoid=props.navigation.getParam('video')

  const stanjeKorisnici= useSelector( state => state.korisnici)
  
  let korisnik;
  useEffect ( () => {
    postaviUsername(stanjeKorisnici.username) 
  }, [stanjeKorisnici])
   
  useEffect ( () => {
    //postaviKorisnika(stanjeKorisnici.korisnici.filter(obj=> obj.username == username))
    korisnik= stanjeKorisnici.korisnici.filter(obj=> obj.username == username)   
    if(korisnik[0] !== undefined)
    {
    postaviKorisnika(korisnik)
    postaviId(korisnik[0].id)
    postaviLajkane(korisnik[0].vjezbe)
  
    }}, [username])

    useEffect ( () => {
      console.log("id:", id)
      console.log("lajkani",lajkani)
      console.log("korisnik",kor)
    }, [id])
   
  const dispatch= useDispatch();

  const favHandler = useCallback( ()=> {
    dispatch(PromjeniOmiljene(id, idVjezbe, naziv, videoid, lajkani, kor));
  }, [id,idVjezbe,naziv,videoid, lajkani, kor]) 

  useEffect( ()=> {
    props.navigation.setParams({promFavorit: favHandler});  
  }, [favHandler]);

  return (
    <View style={stil.ekran}>
       <WebView
        style={{ marginTop: 20, width: 320, height: 230 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
        <Button title= 'Odjava' 
        onPress={()=> { props.navigation.navigate('Auth'), dispatch(spremiKorisnika(null,null)); }}/>
        </View>
  );
}

Video.navigationOptions = (navdata) => {
  const naziv=navdata.navigation.getParam("naziv")
  return {
    HeaderTitle: naziv,
    headerRight: () => 
      <Text onPress={navdata.navigation.getParam("promFavorit")}> Change Favorites </Text>
}}
 
const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Video
