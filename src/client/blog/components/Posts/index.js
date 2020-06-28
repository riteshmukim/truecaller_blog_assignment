import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./styles.css";
import PostItem from "./PostItem";

Posts.propTypes = {};

function Posts({ posts }) {
  return (
    <section className="content-section">
      <h5 className="content-title">Blogs</h5>
      <div className="posts">
        {posts.map((post) => (
          <PostItem post={post} key={post.ID} />
        ))}
      </div>
    </section>
  );
}

export default Posts;
