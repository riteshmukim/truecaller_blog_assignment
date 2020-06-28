import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Posts from "../Posts";
import SideBar from "../SideBar";
import HeaderImage from "./banner-image.jpg";

Home.propTypes = {};

function Home(props) {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gridTemplateRows: "200px auto",
        gridTemplateAreas: `"banner banner"
    "sidebar content"`,
        gap: 16,
      }}
    >
      <div
        style={{
          gridArea: "banner",
          background: `url(${HeaderImage}) no-repeat center`,
        }}
      ></div>

      <SideBar />
      {data && <Posts posts={data.posts} />}
    </div>
  );
}

export default Home;
