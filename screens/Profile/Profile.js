import React from "react";
import { View, SafeAreaView, ScrollView, Image, Text } from "react-native";
import globalStyle from "../../assets/styles/main";
import style from "./style";

const Profile = () => {
  return (
    <SafeAreaView
      style={[globalStyle.AndroidSafeArea, globalStyle.flex, { paddingTop: 8 }]}
    >
      <ScrollView>
        {/* Profile Container */}
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require("../../assets/images/default-profile.png")}
            />
          </View>

          {/* Name Profile Container */}
          <View style={style.userNameContainer}>
            <Text style={style.userName}>Adriel Alves</Text>
          </View>

          <View style={style.profileStatsContainer}>
            <View style={style.singleStatContainer}>
              <Text style={style.singleStatNumber}>45</Text>
              <Text style={style.singleStatText}>Following</Text>
            </View>

            <View style={style.singleStatBorder} />

            <View style={style.singleStatContainer}>
              <Text style={style.singleStatNumber}>30M</Text>
              <Text style={style.singleStatText}>Followers</Text>
            </View>

            <View style={style.singleStatBorder} />

            <View style={style.singleStatContainer}>
              <Text style={style.singleStatNumber}>100</Text>
              <Text style={style.singleStatText}>Posts</Text>
            </View>
          </View>
        </View>

        <View style={style.border} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
