import { View, Text,StyleSheet, Platform} from "react-native"
import { Switch } from "react-native-gesture-handler"
import React from "react";
const Odabir = (props) => {
    return(
        <View style= {stil.FilteriOkvir}>
            <Text> {props.naslov}</Text>
            <Switch
            trackColor = {{ true: "green", false: "red"}}
            value= {props.izbor} 
            onValueChange={props.promjena}
            />
        </View>
    )
}
const stil = StyleSheet.create({
    ekran: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    naslov: {
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    FilteriOkvir: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: 20
    }
  });

  export default Odabir;
