import React from 'react'
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
const PrikazVjezbe = (props) => {
    return (
        <View style={stil.vjezba}>
            <TouchableOpacity onPress={props.odabir}>
                <View>
                    <View style={{...stil.receptRedak, ...stil.receptZaglavlje}}>
                    <WebView
                    style={{ marginTop: 20, width: 320, height: 230 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${props.video}` }}
                    />
                    </View>
                    <View style={{...stil.receptRedak, ...stil.receptDetalji}}>
                    <Text>{props.naziv}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const stil=StyleSheet.create({
    vjezba: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    receptRedak: {
        flexDirection: 'row'
    },
    receptZaglavlje: {
        height: '90%',
    },
    receptDetalji: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    }
});

export default PrikazVjezbe;