import React, { useState, useEffect } from "react";
import axios from "axios";

import PostItem from "../../Posts/PostItem";

function RelatedPosts({ post_id }) {
  const [relatedPosts, setRelatedPosts] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts/related", {
        params: {
          post_id,
        },
      })
      .then((res) => {
        setRelatedPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [post_id]);

  return (
    <div
      style={{
        paddingBottom: 24,
      }}
    >
      <h4>Related Posts</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          paddingTop: 16,
        }}
      >
        {relatedPosts &&
          relatedPosts.map((post) => <PostItem post={post} key={post.ID} />)}
      </div>
    </div>
  );
}

export default RelatedPosts;
