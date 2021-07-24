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
