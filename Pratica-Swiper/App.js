import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaPrincipal from "./src/assets/telas/TelaPrincipal";
import TelaDados from "./src/assets/telas/telaAPI"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="TelaPrincipal"
      >
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Stack.Screen name="TelaDados" component={TelaDados}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
