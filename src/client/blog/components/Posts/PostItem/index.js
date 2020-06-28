import React from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import DOMPurify from "dompurify";
import * as HtmlToReact from "html-to-react";

import "./styles.css";

const sanitize = DOMPurify.sanitize;
const htmlToReactParser = new HtmlToReact.Parser();

function PostItem({ post }) {
  dayjs.extend(relativeTime);

  return (
    <article className="article">
      {post.featured_image && (
        <Link to={`/blog/${post.slug}`}>
          <img
            src={post.featured_image}
            alt={post.title}
            className="post-img"
          />
        </Link>
      )}
      <div className="post-content">
        <h4 className="post-title">
          <Link to={`/blog/${post.slug}`}>
            {htmlToReactParser.parse(post.title)}
          </Link>
        </h4>
        <div className="post-excerpt">
          {htmlToReactParser.parse(sanitize(post.excerpt))}
        </div>
        <div className="post-footer">
          <Link to={`/blog/${post.slug}`} className="post-footer-item">
            {dayjs(post.date).fromNow()}
          </Link>
          <Link to={`/blog/${post.slug}`} className="post-footer-item">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
