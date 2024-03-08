import React from "react";
import Post from "./Post";

const PostList = ({
  posts,
  like,
  handleDelete,
  handleLikes,
  handleComment,
  removeComment,
}) => {
  return (
    <div className="card">
      <div>
        {posts &&
          posts.map((p) => (
            <Post
            key={p._id} 
            p={p} 
            like ={like}
            handleDelete={handleDelete}
            handleLikes={handleLikes}
            handleComment={handleComment}
            removeComment={removeComment}
            />
          ))}
      </div>
    </div>
  );
};

export default PostList;
