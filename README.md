# Description
**withModal.js** is a <a href = "https://reactjs.org/docs/higher-order-components.html">Higher-Order Component</a>
that consumes any component/screen, a button, and a modal, and returns the component/screen enhanced with the logic
necessary for your modal to work, and then it places the button wherever you set it on your component/screen.
This way, you save from having to re-write the code for the modal's logic on every single screen/component that needs
a modal on your app, avoiding duplicated code.

# Installation

Download or clone the source code, open your terminal in the project directory, 
do ***npm install*** (or ***yarn install***). Then, go to the ***ios*** folder 
(type ***cd ios*** in your terminal when already on the root directory) and do
***pod install*** (you must have Xcode installed from the App Store). Finally, 
go back to the root directory of the project (type ***cd ..***) and type 
***npm run ios*** in your terminal. If you did well, the Metro bundler will start building the app and then it will open your iOS simulator, install the app and run it.

### List of commands in order:

```sh
git clone https://github.com/Kevwas/Enhanced-component-with-modal.git
cd Enhanced-component-with-modal
npm install 
cd ios
pod install
cd ..
npm run ios
```

# Usage

Import the **withModal** HOC wherever you need it and export it passing it the component
you want to enhance, the button that will be in your enhanced component, and the modal of
your preference. Then, use your enhanced component with your modal and all its necessary
logic wherever you need it.
    
```js
// index.js
// EnhancedComponent:
import ComponentToEnhance from "./ComponentToEnhance";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";
import withModal from "../withModal";

export default withModal(ComponentToEnhance, CustomButton, CustomModal);
```

### Requirements:

**CustomButtom** needs to receive the "visible" boolean prop and the "callback" function to work.
    
```js
// CustomButton.js
// You can change the style of the CustomButtom to fit the requirements of your UI.
// Make sure it receives the "visible" const and "callback" function through its props,
// the onPress property of the TouchableOpacity uses them for opening the Modal.
import React from "react";
import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    // ...Your button style
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
```

**CustomModal** also needs to receive the "visible" boolean prop and the "callback" function to work.

```js
// CustomModal.js
// This an example of a Modal.
// You can use any Modal you want to place in the EnhancedComponent, change its style
// To fit your needs.
// Make sure the Modal receives the "visible" const and "callback" function through its props,
// it will use for its open/close functionality. Otherwise, it won't work.
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({  
  // ... your Modal style.
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

export default CustomModal;
```

**ComponentToEnhance** needs to receive the CustomButton as a prop to be able to open the modal.

```js
// This is the component/screen you want to enhance with the modal.
// Make sure it receives the CustomButtom component through props.
// Place the Custom Button wherever you want in your component/screen.
import React from "react";
import { Text } from "react-native";

const ComponentToEnhance = ({ CustomButton }) => (
    <>
      <Text>This is the component to be enhanced with the modal</Text>
      {/* 
        Place the button that opens your modal wherever you need it,
        once you pass the button to the withModal wrapper, this will
        give it to this component as a prop.
      */}
      <CustomButton />
    </>
);

export default ComponentToEnhance;
```

# One-File Enhanced Component

This is how your enhanced component will look like if you have everything in a single file.
    
```js
// OneFileEnhancedComponent.js
import React from "react";
import { 
  Text, 
  Button, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Modal 
} from "react-native";
import withModal from "./withModal";

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

const MyButton = ({ visible, callback }) => (
  <Button
    style={styles.button}
    onPress={() => callback(!visible)}
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
```

# App

```js
import React from "react";
import { StyleSheet, View } from "react-native";
import EnhancedComponent from "./src/components/EnhancedComponent";
// import OneFileEnhancedComponent from "./src/components/OneFileEnhancedComponent"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <EnhancedComponent />
      {/* <OneFileEnhancedComponent /> */}
    </View>
  );
};

export default App;
```

# Core: withModal.js

```js
// withModal.js
import React, { useState } from "react";

const withModal = (Component, CustomButton, CustomModal) => () => {
  const [modalVisible, setModalVisible] = useState(false);

  const ButtonWithCallback = () => ( 
    <CustomButton 
      visible={modalVisible} 
      callback={setModalVisible} 
    /> 
  );

  return (
    <>
      <CustomModal visible={modalVisible} callback={setModalVisible} />
      <Component CustomButton={ButtonWithCallback} />
    </>
  );
}

export default withModal;
```

# Diagram

If you want to see in a more graphical way how the **withModal** works, check this diagram:

<a target="_blank" href = "./assets/EnhancedComponentWithModal.svg">
<img src="./assets/EnhancedComponentWithModal.svg" alt="EnhancedComponentWithModal" height="400">
</a>


# Demo

**Note:** Test it with ***My Device***, ***iOS***, or ***Android*** options (The built-in React-Native Modal doesn't work on the web).

<a href = "https://snack.expo.dev/@kevwas/enhancedcomponentswithmodal">https://snack.expo.dev/@kevwas/enhancedcomponentswithmodal</a>
