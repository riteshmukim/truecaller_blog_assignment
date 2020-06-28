import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Post from "./components/Post";
import "./styles.css";

const Blog = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/blog/:slug" component={Post} exact={true} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default Blog;
