import React from "react";
import Post from "./Post";

interface PostListProps {
  posts: any[]; // Define the type of your posts array
  handleDelete: (postId: string) => void;
  handleLikes: (postId: string) => void;
  handleComment: (postId: string, comment: string) => void;
  removeComment: (postId: string, commentId: string) => void;
}

const PostList: React.FC<PostListProps> = ({
  posts,
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
