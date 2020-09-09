import React from "react";

const Like = (props) => {
  const { liked, onLike } = props;
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";

  return (
    <i
      onClick={onLike}
      className={classes}
      aria-hidden="false"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
