import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Blog from "./blog";

ReactDOM.render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
  document.getElementById("app")
);
