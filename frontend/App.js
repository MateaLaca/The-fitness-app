import React, { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigator from "./navigacija/Navigator";
import {createStore,combineReducers} from 'redux';
import vjezbaReducer from './store/reducers/vjezbe';
import korisnikReducer from './store/reducers/korisnici';
import {Provider} from 'react-redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import { enableScreens} from "./navigacija/Navigator";
// enableScreens();

const middleware = [thunk]
const glavniReducer= combineReducers( {
  vjezbe: vjezbaReducer,
  korisnici: korisnikReducer
})

const store = createStore(glavniReducer, composeWithDevTools(applyMiddleware(...middleware)));

LogBox.ignoreAllLogs(true)
const ucitajFontove = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "raleway": require("./assets/fonts/Raleway-Regular.ttf"),
  });
};

export default function App() {
  const [fontUcitan, postaviFontUcitan] = useState(false);
  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => postaviFontUcitan(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigator /> 
    </Provider>
      );
}
const stil = StyleSheet.create({});