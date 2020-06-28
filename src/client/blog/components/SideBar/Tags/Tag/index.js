import React from "react";
import "./styles.css";

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
