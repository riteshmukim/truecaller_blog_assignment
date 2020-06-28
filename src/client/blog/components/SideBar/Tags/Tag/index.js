import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Tag.propTypes = {};

function Tag({ tag, onClick }) {
  return (
    <li
      className={"tag-list-item" + (tag.selected ? " selected" : "")}
      onClick={onClick}
    >
      {tag.name}
    </li>
  );
}

export default Tag;
