import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

const UserPost = (props) => {
  return (
    /* Post Container */
    <View style={style.postContainer}>
      {/* Post Header */}
      <View style={style.userInformationContainer}>
        {/* User information */}
        <View style={style.userInformation}>
          <View style={style.profileImage}>
            <Image
              source={require("../../assets/images/default-profile.png")}
            />
          </View>

          <View>
            {/* Name */}
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            {/* Location */}
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
        </Pressable>
      </View>

      {/* Post Image */}
      <View style={style.post}>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/default-post.png")}
        />
      </View>

      {/* Reaction Container */}
      <View style={style.userPostReaction}>
        {/* Reaction <> likes */}
        <Pressable style={style.userReactionButton}>
          <FontAwesomeIcon icon={faHeart} />
          <Text>{props.likes}</Text>
        </Pressable>

        {/* Reaction <> commets */}
        <Pressable style={style.userReactionButton}>
          <FontAwesomeIcon icon={faComment} />
          <Text>{props.comments}</Text>
        </Pressable>

        {/* Reaction <> bookmarks */}
        <Pressable style={style.userReactionButton}>
          <FontAwesomeIcon icon={faBookmark} />
          <Text>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string,
};

export default UserPost;
