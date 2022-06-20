import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = ({ setNumber }) => {
  const [eneteredNumber, setEnteredNumber] = useState("");
  const changeHandler = (value) => {
    setEnteredNumber(value);
    console.log(typeof value);
  };
  const resetHandler = () => {
    setEnteredNumber("");
  };
  const confirmHandler = () => {
    setNumber(eneteredNumber);
    const a = parseInt(eneteredNumber);
    if (isNaN(a)) {
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Okay",
            onPress: () => {
              resetHandler();
              setNumber(undefined);
            },
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
      );
    }
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.InputView}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none" //not need in this app,jus for demonstration
          autoCorrect={false} //not need in this app,jus for demonstration
          value={eneteredNumber}
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 10, //--andrioid devices shadow verir
    //IOS platformasina shdow elave etmek ucun asagidaki elementler tetbiq edilir
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity:0.25
  },
  InputView: {
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default StartGameScreen;
