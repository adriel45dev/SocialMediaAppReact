import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 26,
    paddingLeft: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  messageIcon: {
    padding: 12,
    backgroundColor: "#F9FAFB",
    borderRadius: 100,
    position: "relative",
  },

  messageNumberContainer: {
    width: 15,
    height: 15,
    backgroundColor: "#F35BAC",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },

  messageNumber: {
    fontSize: 6,
    lineHeight: 7,
    fontWeight: "600",
    color: "#fff",
  },
  userStoryContainer: {
    paddingTop: 12,
    paddingHorizontal: 28,
    height: 100,
  },

  userPostContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
    height: "100%",
    flex: 1,
  },
});

export default style;
