import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";

import Routes from '@root/routes';
import { store, persistor } from "./src/store";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Rubik-Medium": require("./src/assets/fonts/Rubik-Medium.ttf"),
        "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
        "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf")
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          {fontLoaded && (
            <Routes />
          )}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
