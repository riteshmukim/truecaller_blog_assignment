import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import DOMPurify from "dompurify";
import * as HtmlToReact from "html-to-react";

import "./styles.css";

const sanitize = DOMPurify.sanitize;
const htmlToReactParser = new HtmlToReact.Parser();

PostItem.propTypes = {};

function PostItem({ post, classes }) {
  dayjs.extend(relativeTime);

  return (
    <article className="article">
      <Link to={`/post/${post.ID}`}>
        <img
          src={post.post_thumbnail.URL}
          alt={post.title}
          className="post-img"
        />
      </Link>
      <div className="post-content">
        <h4 className="post-title">
          <Link to={`/post/${post.ID}`}>
            {htmlToReactParser.parse(post.title)}
          </Link>
        </h4>
        <div className="post-excerpt">
          {htmlToReactParser.parse(sanitize(post.excerpt))}
        </div>
        <div className="post-footer">
          <Link to={`/post/${post.ID}`} className="post-footer-item">
            {dayjs(post.date).fromNow()}
          </Link>
          <Link to={`/post/${post.ID}`} className="post-footer-item">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
