import React from "react";
import Tags from "./Tags";
import Categories from "./Categories";
import "./styles.css";

function SideBar({ selectedTag, setSelectedTag }) {
  return (
    <div className="sidebar">
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Categories />
    </div>
  );
}

export default SideBar;
