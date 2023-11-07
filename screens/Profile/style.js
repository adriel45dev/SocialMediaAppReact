import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImageContent: {
    borderWidth: 1,
    paddingHorizontal: 3,
    borderColor: "#0150EC",
    borderRadius: 120,
    padding: 4,
    marginTop: 32,
  },

  profileImage: {
    width: 120,
    height: 120,
  },
  userName: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#022150",
  },
  userNameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  profileStatsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 24,
  },

  singleStatContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  singleStatBorder: {
    borderLeftWidth: 1,
    borderLeftColor: "#E9EFF1",
    height: 30,
  },

  singleStatNumber: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#022150",
  },

  singleStatText: {
    marginTop: 6,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#79869F",
  },

  border: {
    borderTopWidth: 1,
    borderColor: "#EFF2F6",
    marginVertical: 16,
    marginHorizontal: 28,
  },
});

export default style;
