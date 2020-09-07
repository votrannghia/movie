import React from "react";

const Like = (props) => {
  // Preparing the information for rendering
  const { liked, onLike } = props;
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";

  // Describing What the UI should look like
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
