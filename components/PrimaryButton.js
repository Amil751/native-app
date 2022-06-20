import { Pressable, Text, View, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttenInnerContainer, styles.click]
            : styles.buttenInnerContainer
        }
        onPress={props.onPress}
        // android_ripple={{ color: "white" }}
      >
        <Text style={styles.input}>{props.children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    marginBottom: 5,
    overflow: "hidden",
  },
  buttenInnerContainer: {
    backgroundColor: "#943f6a",

    padding: 5,

    alignItems: "center",
  },
  input: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  click: {
    opacity: 0.25,
  },
});

export default PrimaryButton;
