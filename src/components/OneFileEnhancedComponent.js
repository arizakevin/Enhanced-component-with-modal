// The result of using this component is the same than using
// the EnhancedComponent
import React from "react";
import { 
  Text, 
  Button, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Modal 
} from "react-native";
import withModal from "../HOCs/withModal";

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

const CustomModal = ({ visible, callback }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={() => callback(!visible)}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => callback(!visible)}
        >
          <Text style={styles.textStyle}>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const MyButton = ({ callback }) => (
  <Button
    style={styles.button}
    onPress={() => callback(!props.visible)}
    title="Show Modal"
  />
);

const ComponentToEnhance = ({ CustomButton }) => (
  <>
    <Text>This is the component to be enhanced with the modal</Text>
    <CustomButton />
  </>
);

export default withModal(ComponentToEnhance, MyButton, CustomModal);