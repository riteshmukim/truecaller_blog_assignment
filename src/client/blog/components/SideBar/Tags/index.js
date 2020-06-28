import React, { useState, useEffect } from "react";
import axios from "axios";
import Tag from "./Tag";

function Tags() {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts/tags")
      .then((res) => {
        console.log(res);
        setTags(res.data.tags);
      })
      .catch((err) => console.log(err));
  }, []);

  return tags ? (
    <aside id="tags">
      <h5 className="aside-title">Tags</h5>
      <ul
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        {tags && tags.map((tag) => <Tag key={tag.slug} tag={tag} />)}
      </ul>
    </aside>
  ) : null;
}

export default Tags;
