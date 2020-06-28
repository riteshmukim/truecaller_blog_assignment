import React from "react";
import PropTypes from "prop-types";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import DOMPurify from "dompurify";
import * as HtmlToReact from "html-to-react";

import "./styles.css";

Article.propTypes = {};

function Article({ post }) {
  const sanitize = DOMPurify.sanitize;
  const htmlToReactParser = new HtmlToReact.Parser();

  return (
    <article
      style={{
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <img src={post.featured_image} alt={post.title} />
      <h5 className="blog-title">{post.title}</h5>
      <div className="blog-date-author">
        <p>{dayjs(post.date).format("DD-MM-YYYY")}</p>
        <p>{post.author.name}</p>
      </div>
      <div className="blog-content">
        {htmlToReactParser.parse(sanitize(post.content))}
      </div>
    </article>
  );
}

export default Article;
