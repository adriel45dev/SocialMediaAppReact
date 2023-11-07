import { StyleSheet, StatusBar, Platform } from "react-native";

const globalStyle = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  flex: {
    flex: 1,
  },
});

export default globalStyle;
