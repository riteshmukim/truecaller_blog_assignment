import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Categories from "./Categories";
import "./styles.css";

SideBar.propTypes = {};

function SideBar({
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
}) {
  return (
    <div className="sidebar">
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default SideBar;
