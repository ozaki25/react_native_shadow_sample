import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ children }) => (
  <TouchableOpacity style={styles.button}>
    <Text>{children}</Text>
  </TouchableOpacity>
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button>ボタン</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: "snow",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    borderColor: "#bbb",
    borderWidth: 1,
    // shadowXxx is only ios
    shadowColor: "#ccc",
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    // elevation is only android
    elevation: 10
  }
});
