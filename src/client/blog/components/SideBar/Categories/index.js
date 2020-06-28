import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data.categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return categories ? (
    <aside id="categories" style={{ paddingTop: 16 }}>
      <h5 className="aside-title">Categories</h5>
      <ul
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          display: "flex",
          flexFlow: "column wrap",
        }}
      >
        {categories.map((category) => (
          <Link to={`/category/${category.slug}`} key={category.slug}>
            <li
              style={{
                padding: 4,
              }}
            >
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  ) : null;
}

export default Categories;
