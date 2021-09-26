import React from 'react'
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';

const GridPrikaz = (props) => {
    return(
        <TouchableOpacity style={stil.element} onPress={props.odabir} >
            <View  style= {{...stil.okvir}}>
                <Text style={stil.naslov}>{props.naziv}</Text>
            </View>
        </TouchableOpacity>
        )}
const stil = StyleSheet.create( {
element: {
    flex:1,
    margin:15,
    height: 150
},
okvir:{
    flex:1,
    borderRadius:15,
    elevation: 5,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#FE2F57'
},
naslov: {
    fontSize:22,
    textAlign: 'right'
}
});

export default GridPrikaz;