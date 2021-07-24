// This an example of a Modal.
// You can use any Modal you want to place in the EnhancedComponent, change its style
// To fit your needs.
// Make sure the Modal receives the "visible" const and "callback" function through its props,
// it will use for its open/close functionality. Otherwise, it won't work.

import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 0,
    flex:1,
    width: "100%",
    backgroundColor: "gray",
    opacity: 0.5,
    padding: 35,
    alignItems: "center",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

const CustomModal = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.visible}
    onRequestClose={() => props.callback(!props.visible)}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => props.callback(!visible)}
        >
          <Text style={styles.textStyle}>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default CustomModal;
