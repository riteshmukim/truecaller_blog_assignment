import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Categories from "./Categories";
import "./styles.css";

SideBar.propTypes = {};

function SideBar({ posts }) {
  return (
    <div className="sidebar">
      <Tags />
      <Categories />
    </div>
  );
}

export default SideBar;
