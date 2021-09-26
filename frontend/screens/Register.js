import React, { useState } from 'react';
import {Keyboard, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import korisniciServer from '../src/services/korisnici'
import registerServer from '../src/services/register'

import {useDispatch} from "react-redux";
import {spremiKorisnika} from "../store/actions/korisnici"

const Register = (props) => {
  const [username, postaviUsername] = useState('')
  const [pass, postaviPass] = useState('')
  const [pass2, postaviPass2] = useState('')
    
  const noviUsername = (tekst) => {
    postaviUsername(tekst)
  }
  const novaPass= (tekst) => {
    postaviPass(tekst)
  }
  const novaPass2= (tekst) => {
    postaviPass2(tekst)
  }
  const dispatch=useDispatch();

  const userRegistration = async (e)=>{
    e.preventDefault()
   if(pass==pass2)
   {
    const korisnik= await registerServer.registracija({username, pass})
    
    await korisniciServer.stvori({username,pass})

    dispatch(spremiKorisnika(korisnik.username, korisnik.token));
    props.navigation.navigate("App");
    postaviUsername('')
    postaviPass('')
    postaviPass2('')
  }
   else{
     alert("Unesene lozinke se ne podudaraju! ")
   }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >

    <View style={stil.ekran}>
      <Image style={stil.slika} source={ require('../constants/images/image.jpg')} />
      <Text style= { stil.naslov}>FITNESS </Text>
      <Text style= { stil.opis}> 
        Prilagodite se kućnim vjezbama i videozapisima-
        Cardio, Pilates, HIIT, i ostalo
      </Text>

      <View style= {stil.unos}>
      <TextInput placeholder='Username' placeholderTextColor='#FE2F57' style= {stil.input} value={username} onChangeText={noviUsername} />
      </View>

      <View style= {stil.unos}>
      <TextInput secureTextEntry placeholder='Password' placeholderTextColor='#FE2F57' style= {stil.input} value={pass} onChangeText={novaPass} />
      </View>

      <View style= {stil.unos}>
      <TextInput secureTextEntry placeholder='Confirm Password' placeholderTextColor='#FE2F57' style= {stil.input} value={pass2} onChangeText={novaPass2} />
      </View>

<View style= {stil.natpis}>
  <Text style={ stil.tekst} onPress={userRegistration} > Register.</Text>
</View>
    </View>
    </TouchableWithoutFeedback>
  );
};
Register.navigationOptions= {
  headerShown:false
}
const stil = StyleSheet.create({
  natpis: {
    marginHorizontal:55,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    backgroundColor: '#FE2F57',
    paddingVertical:10,
    borderRadius: 23,

  },
  tekst: {
    color: 'white',
    fontFamily: 'open-sans'
  },
  input: {
    paddingHorizontal: 10
  },
  ikona: {
    color: '#FE2F57',
    
  },
  unos:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop:15,
    paddingHorizontal: 10,
    borderColor: '#FE2F57',
    borderRadius: 23,
    paddingVertical: 2
  },
  opis: {
    alignSelf: 'center',
    fontFamily: 'open-sans',
    marginHorizontal:55,
    marginTop: 5,
    opacity: 0.5
  },
  naslov: {
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    alignSelf: 'center'
  },
  slika: {
    width: '100%',
    height: '45%'
  },
  ekran: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default Register