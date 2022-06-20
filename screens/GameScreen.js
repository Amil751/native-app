import { enableExpoCliLogging } from "expo/build/logs/Logs";
import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
const GameScreen = ({ enteredNumber }) => {
  const [random, setRandom] = useState(
    generateRandomBetween(1, 100, enteredNumber)
  );

  const addHandler = () => {
    if (random > enteredNumber) {
      Alert.alert(
        "Add button clicked",
        "Wrong guess", [
        {
          text: "Okay",
          // onPress: () => {
          //   resetHandler();
          //   setNumber(undefined);
          // },
          style: "cancel",
        },
      ]);
    } else {
      setRandom( generateRandomBetween(random,100,enteredNumber));
    }
    
  };
  const decreaseHandler = () => {
    if (random < enteredNumber) {
      Alert.alert(
        "Decrease button clicked",
        "Wrong guess", [
        {
          text: "Okay",
          // onPress: () => {
          //   resetHandler();
          //   setNumber(undefined);
          // },
          style: "cancel",
        },
      ]);
    } else {
      setRandom( generateRandomBetween(1,random,enteredNumber));
    }
    
  }
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Oppenent's Guess</Text>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.text}>{random}</Text>
      </View>
      <View style={styles.guess}>
        <Text style={styles.guessText}>Higher or lower</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={decreaseHandler}>-</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={addHandler}>+</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 36,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
  },
  numberContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: Colors.orange,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: Colors.orange,
    fontWeight: "bold",
  },
  guess: {
    backgroundColor: Colors.container,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  guessText: {
    color: "#cba730",
    padding: 24,
    fontWeight: "bold",
  },
  button: {
    // flex: 1,
    width: 100,
    padding: 10,
  },
});
export default GameScreen;
