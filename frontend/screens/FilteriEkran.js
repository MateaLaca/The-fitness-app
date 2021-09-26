import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Odabir from "../components/Odabir";
import { useDispatch} from 'react-redux';
import {postaviFiltere} from "../store/actions/vjezbe"

const FilteriEkran = (props) => {
 const [beginner, postaviBeginner]=useState(false)
 const [intermediate, postaviIntermediate]=useState(false)
 const [expert, postaviExpert] = useState(false)
 const [oprema, postaviOpremu] =useState(false)

const dispatch = useDispatch();

useEffect( ()=> {
  dispatch(postaviFiltere({
    beginner,
    intermediate,
    expert,
    oprema
  }));
  },
  [beginner,intermediate,expert,oprema])

  return ( 
    <View style={stil.ekran}>
      <Text> Odaberite filtere za pretragu vježbi:  </Text>
      <Odabir
        naslov= "Beginner"
        izbor={beginner}
        promjena= {change=> postaviBeginner(change) }
      />
      <Odabir
        naslov= "Intermediate"
        izbor={intermediate}
        promjena= {change=> postaviIntermediate(change) }
      />
      <Odabir
      naslov= "Expert"
      izbor={expert}
      promjena= {change=> postaviExpert(change) }
      /> 
      <Odabir
      naslov= "Equipment"
      izbor={oprema}
      promjena= {change=> postaviOpremu(change) }
      />
    </View>
  );
}
FilteriEkran.navigationOptions = (navData) => {
  return {
   HeaderTitle: "Filteri",
   headerLeft: () => 
   <Text 
   onPress={()=>{
     navData.navigation.toggleDrawer()
    }}> MENU</Text>,	   
   headerRight: ()=> 
    <Text onPress={()=>{
      navData.navigation.navigate('TabFavoriti')
     }}> SAVE </Text>
   }
  }
const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    marginTop:40,
    alignItems: "center"
  }
});

export default FilteriEkran