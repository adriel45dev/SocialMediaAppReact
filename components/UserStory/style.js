import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  name: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    marginTop: 8,
  },

  userStoryContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  userImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
  },

  userImageContainer: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 3,
    borderColor: "#F35BAC",
  },
});

export default style;
