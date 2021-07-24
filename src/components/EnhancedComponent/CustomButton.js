// You can change the style of the CustomButtom to fit the requirements of your UI.
// Make sure it receives the "visible" const and "callback" function through its props,
// the onPress property of the TouchableOpacity uses them for opening the Modal.

import React from "react";
import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "green",
  }
});

const CustomButton = ({ visible, callback }) => (
  <Button
    style={styles.button}
    onPress={() => callback(!visible)}
    title="Show Modal"
  />
);

export default CustomButton;
