import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Posts from "../Posts";
import SideBar from "../SideBar";
import HeaderImage from "./banner-image.jpg";

function Home(props) {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/posts", {
        params: {
          tag: selectedTag,
          category: selectedCategory,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedTag, selectedCategory]);

  const handleLoadMore = () => {
    axios
      .get("/api/posts", {
        params: {
          page_handle: data.meta.next_page,
          number: 5,
        },
      })
      .then((res) => {
        console.log(res);
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
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        {data && <Posts posts={data.posts} handleLoadMore={handleLoadMore} />}
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
