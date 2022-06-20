import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
export default function App() {
  const [number, setNumber] = useState();
  let screen = <StartGameScreen setNumber={setNumber} />;
  if (number) {
    screen = <GameScreen enteredNumber={number} />;
  }
//salam
  return (
    <LinearGradient
      colors={[`${Colors.container}`, `${Colors.orange}`]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}
      >
        {/* <SafeAreaView >{screen}</SafeAreaView> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  image: {
    opacity: 0.5,
  },
});
