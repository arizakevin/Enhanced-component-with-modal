import React from "react";
import { StyleSheet, View } from "react-native";
import EnhancedComponent from "./src/components/EnhancedComponent";
import OneFileEnhancedComponent from "./src/components/OneFileEnhancedComponent"

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
      <OneFileEnhancedComponent />
    </View>
  );
};

export default App;
