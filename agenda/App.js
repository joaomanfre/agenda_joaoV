import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./tela1";
import Screen2 from "./tela2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Tela2" component={Screen2} />
        <Stack.Screen name="Tela1" component={Screen1}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}