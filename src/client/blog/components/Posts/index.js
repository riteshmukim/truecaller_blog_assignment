import React from "react";

import "./styles.css";
import PostItem from "./PostItem";

function Posts({ posts, handleLoadMore, category }) {
  return (
    <section className="content-section">
      <h5 className="content-title">Blogs</h5>
      {category && (
        <h4 className="blog-category">
          Category: {category.replace(/-/g, " ")}
        </h4>
      )}
      <div className="posts">
        {posts.map((post) => (
          <PostItem post={post} key={post.ID} />
        ))}
      </div>
      <div style={{ textAlign: "center", paddingTop: 16 }}>
        <div onClick={handleLoadMore} className="load-more-button">
          Load More
        </div>
      </div>
    </section>
  );
}

export default Posts;
