import React from "react";
import PostItem from "./PostItem";
import styles from "./PostList.module.css";

const PostsList = ({ posts }) => {
  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostsList;
