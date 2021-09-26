import React, { useState} from 'react';
import {Keyboard ,StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import loginServer from '../src/services/login'
import {useDispatch } from "react-redux";
import {spremiKorisnika} from "../store/actions/korisnici"

const Login = (props) => {
  const [username, postaviUsername] = useState('')
  const [pass, postaviPass] = useState('')
 
  const noviUsername = (tekst) => {
    postaviUsername(tekst)
  }
  const novaPass= (tekst) => {
    postaviPass(tekst)
  }
  const dispatch=useDispatch();
const userLogin = async (e) => {
  e.preventDefault()
  try {
    
    const korisnik= await loginServer.prijava({username, pass})
    // kad mi vrati token i username spremi u lokalni spremnik

    dispatch(spremiKorisnika(korisnik.username,korisnik.token));
    
    props.navigation.navigate("App");
    postaviUsername(''),
    postaviPass('')
  }
  catch(exception) {
    alert("Neispravni podaci. Korisnik ne postoji u bazii.")
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

    <View >
      <View style= {stil.unos}>
      <Ionicons style= {stil.ikona} IconComponent={Ionicons} name="mail" />
      <TextInput style= {stil.input} value={username} name="Username" onChangeText={noviUsername} />
      </View>

      <View style= {stil.unos}>
      <Ionicons style= {stil.ikona} IconComponent={Ionicons} name="lock-closed" />
      <TextInput style= {stil.input} secureTextEntry name="Password" value={pass} onChangeText={novaPass} />
      </View>
      </View>
<View style= {stil.natpis}>
<Text style={ stil.tekst} onPress={userLogin} > Already a member </Text>
</View>
<Text onPress= {() => {
props.navigation.navigate({ routeName: "Register" })} }
style= {stil.novi}> New user </Text>
    </View>
    </TouchableWithoutFeedback> 
  );
};
Login.navigationOptions= {
  headerShown:false
}
const stil = StyleSheet.create({
  novi: {
    alignSelf: 'center',
    color:'#FE2F57',
    fontFamily:'open-sans',
    paddingVertical: 30
  },
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

export default Login