# Description
High-Order Component that consumes any component/screen, a button, and any modal you want, and returns the component/screen enhanced with all the logic necesary for your modal to work and place the button wherever you set it on your screen.

# Installation

Download or clone the source code, open your terminal in the project directory, 
do ***npm install*** (or ***yarn install***). Then, go to the ***ios*** folder 
(type ***cd ios*** in your terminal when already on the root directory) and do
***pod install*** (you must have xcode installed from the App Store). Finally, 
go back to the root directory of the project (type ***cd ..***) and type 
***npm run ios*** in your terminal. If you did well, the Metro bundler will 
start building the app an then this will open your iOS simulator, install the 
app and run it.

### List of commands in order:

    $ git clone https://github.com/Kevwas/Generic-HOC-Error-Boundary.git
    $ cd Generic-HOC-Error-Boundary
    $ npm install 
    $ cd ios
    $ pod install
    $ cd ..
    $ npm run ios

# Usage

Import the withModal HOC wherever you need it and export it passing it the component
you want to enhance, the button that will be in your enhanced component 
and the modal of your preference. Then, use it wherever you need it.

    // EnhancedComponent.js
    import ComponentToEnhance from "./ComponentToEnhance";
    import CustomButton from "./CustomButton";
    import CustomModal from "./CustomModal";

    import withModal from "../HOCs/withModal";

    export default withModal(ComponentToEnhance, CustomButton, CustomModal);

### Requirements:

- CustomButtom needs to receive the "visible" boolean prop to work.

    // CustomButton.js
    // You can change the style of the CustomButtom to fit the requirements of your UI.
    // Make sure it receives the "visible" const and "callback" function through its props,
    // the onPress property of the TouchableOpacity uses them for opening the Modal.
    const CustomButton = (props) => (
        <Button
        style={styles.button}
        onPress={() => callback(!props.visible)}
        title="Show Modal"
        />
    )

    export default CustomButton;

- CustomModal needs to receive the "visible" boolean prop and the "callback" function to work.

    // CustomModal.js
    // This an example of a Modal.
    // You can use any Modal you want to place in the EnhancedComponent, change its style
    // To fit your needs.
    // Make sure the Modal receives the "visible" const and "callback" function through its props,
    // it will use for its open/close functionality. Otherwise, it won't work.
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

- EnhancedComponent needs to receive the CustomButton as a prop to be able to open the modal.

    // This is the component/screen you want to enhance with the modal.
    // Make sure it receives the CustomButtom component through props.
    // Place the Custom Button wherever you want in your component/screen.

    import React from "react";
    import { Text } from "react-native";

    const CustomText = ({ CustomButton }) => {
    return(
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
    };

    export default CustomText;

# withModal.js

withModal.js is the core of this repo:

    // withModal.js
    import React, { useState } from "react";

    const withModal = (Component, CustomButton, CustomModal) => () => {
        const [modalVisible, setModalVisible] = useState(false);

        const ButtonWithCallback = () => { return CustomButton(modalVisible, setModalVisible) }

        return (
        <>
            <CustomModal visible={modalVisible} callback={setModalVisible} />
            <Component CustomButton={ButtonWithCallback} />
        </>
        );
    }

    export default withModal;

# Diagram

If you to see in a more graphical way, check this diagram:
<a href = "./assets/EnhancedComponentWithModal.html" target="
_blank">Enhanced Component with Modal</a>


# Demo

<a href = "https://snack.expo.dev/@kevwas/hoc-example-with-modal">https://snack.expo.dev/@kevwas/hoc-example-with-modal</a>

# References

### Higher-Order Components React's official docs:

<a href = "https://reactjs.org/docs/higher-order-components.html">Higher-Order Components</a>
