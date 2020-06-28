import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "../Posts";
import SideBar from "../SideBar";
import HeaderImage from "./banner-image.jpg";
import { useParams } from "react-router-dom";

function Home() {
  const { slug = "" } = useParams();
  const [data, setData] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    axios
      .get("/api/posts", {
        category: slug,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/posts", {
        params: {
          tag: selectedTag,
          category: slug,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedTag, slug]);

  const handleLoadMore = () => {
    axios
      .get("/api/posts", {
        params: {
          page_handle: data.meta.next_page,
          number: 5,
        },
      })
      .then((res) => {
        setData({
          ...data,
          ...res.data,
          posts: [...data.posts, ...res.data.posts],
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: 200,
          width: "100%",
          background: `url(${HeaderImage}) no-repeat center`,
        }}
      ></div>
      <div
        style={{
          maxWidth: 980,
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"sidebar content"`,
          gap: 16,
          margin: "auto",
        }}
      >
        <SideBar selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        {data && (
          <Posts
            posts={data.posts}
            category={slug}
            handleLoadMore={handleLoadMore}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
