import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Article from "./Article";
import RelatedPosts from "./RelatedPost";

function Post(props) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts/slug", {
        params: {
          slug,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return post ? (
    <div
      style={{
        margin: "auto",
        maxWidth: 720,
      }}
    >
      <Article post={post} />
      <RelatedPosts post_id={post.ID} />
    </div>
  ) : null;
}

export default Post;
