import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Tag.propTypes = {};

function Tag({ tag, selected, onClick }) {
  return <li className="tag-list-item">{tag.name}</li>;
}

export default Tag;
