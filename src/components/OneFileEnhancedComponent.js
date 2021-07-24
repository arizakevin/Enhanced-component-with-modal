import React from "react";
import { 
  Text, 
  Button, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Modal 
} from "react-native";

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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "green",
  }
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

const CustomButton = (props) => (
  <Button
      style={styles.button}
      onPress={() => callback(!props.visible)}
      title="Show Modal"
  />
);

const CustomText = ({ CustomButton }) => (
  <>
    <Text>This is the component to be enhanced with the modal</Text>
    <CustomButton />
  </>
);

export default CustomText;