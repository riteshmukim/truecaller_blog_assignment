import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

Post.propTypes = {};

function Post(props) {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Post;
