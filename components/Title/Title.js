import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";

export default function Title(props) {
  return <Text style={style.title}>{props.title}</Text>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
