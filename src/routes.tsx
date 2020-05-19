import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Home from "@pages/Home";
import Splash from "@pages/Splash";
import { ApplicationState } from "./store";

const Stack = createStackNavigator();

export default function Routes() {
  const { registred } = useSelector((state: ApplicationState) => state.route);
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      {!registred ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
}
