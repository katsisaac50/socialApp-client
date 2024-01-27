import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Avatar } from "antd";
import axios from "axios";
import { UserContext } from "../../context";
import Post from "../../components/cards/Post";

const PostComment = ({ post }) => {
  const [posts, setPosts] = useState(post);
  const router = useRouter();
  const { user } = useContext(UserContext);
  const _id = router.query._id;

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user/post/${_id}`);
      setPosts(data.post);
      console.log(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  return (
    <div className="post-comment">
      <div className="post-comment-header">
        <Post p={posts} />
      </div>
    </div>
  );
};

export default PostComment;
