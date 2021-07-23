import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

const CustomButton = ( visible, callback ) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonOpen]}
      onPress={() => callback(!visible)}
    >
      <Text style={styles.textStyle}>Show Modal</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
