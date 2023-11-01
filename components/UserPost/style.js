import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  name: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    color: "#79869F",
  },

  userInformation: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  profileImage: {
    borderWidth: 1,
    borderColor: "#F35BAC",
    borderRadius: 50,
    padding: 3,
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  post: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  postContainer: {
    flex: 1,
    gap: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#EFF2F6",
  },

  userPostReaction: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 27,
  },

  userReactionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default style;
