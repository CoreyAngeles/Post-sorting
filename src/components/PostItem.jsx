import React from "react";
import styles from "./PostItem.module.css";

const PostItem = ({ ...post }) => {
  return (
    <div className={styles.post}>
      <h2>{`${post.id}. ${post.title}`}</h2>
      <p>{post.description}</p>
    </div>
  );
};

export default PostItem;
