import React, { useState, useEffect } from "react";
import axios from "axios";
import Tag from "./Tag";

function Tags({ selectedTag, setSelectedTag }) {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts/tags")
      .then((res) => {
        setTags(res.data.tags);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateTags = (selectedTag = "") => {
    const updatedTags = tags.map((tag) => ({
      ...tag,
      selected: selectedTag === tag.slug,
    }));
    setTags(updatedTags);
  };

  const handleTagClick = (tag) => () => {
    const newTag = selectedTag === tag ? "" : tag;
    setSelectedTag(newTag);
    updateTags(newTag);
  };

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
        {tags.map((tag) => (
          <Tag key={tag.slug} tag={tag} onClick={handleTagClick(tag.slug)} />
        ))}
      </ul>
    </aside>
  ) : null;
}

export default Tags;
