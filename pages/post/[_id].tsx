import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Avatar } from "antd";
import axios from "axios";
import { UserContext } from "../../context";
import Post from "../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import CommentForm from "../../components/forms/CommentForm";
import {toast} from "react-toastify";

const PostComment = ({ post }) => {
  const [posts, setPosts] = useState(post);
  const router = useRouter();
  const _id = router.query._id;
  const [state] = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [visible, setVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState<{ _id: string } | null>(null);

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const handleComment = async (post) => {
    console.log(post);
    setCurrentPost(post);
    setVisible(true);

    };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      console.log("hdhdls=>", currentPost)
      
      const { data } = await axios.post(
        `/create-comment`,
        {
          content: comment,
          postId: currentPost._id,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      setComment("");
      setVisible(false);
      fetchPost();
      toast.success(data.message, {
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user/post/${_id}`);
      setPosts(data.post);
      console.log(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const removeComment = async (postId, comment) => {
    // console.log(postId, comment);
    let confirm = window.confirm(
      "Are you sure you want to delete this comment?"
      );
    if (!confirm) return;
    try {
      const { data } = await axios.delete(
        `/user/post/${postId}/comment/${comment._id}`
      );
      console.log(data);
      fetchPost();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="post-comment">
      <div className="row py-5 text-center">
        <div className="col text-center">
          <h1>SocialApp</h1>
        </div>
      </div>
      <div className="post-comment-header">
        <Post p={posts} commentsCount={100} removeComment={removeComment} handleComment={handleComment} />
      </div>
      <Link href="/user/dashboard" className="d-flex justify-content-center p-5">
        <RollbackOutlined/>
      </Link> 
      <Modal visible={visible} onCancel={() => setVisible(false)} title="Comment" footer={null}>
          <CommentForm addComment={addComment} comment={comment} setComment={setComment}/>
      </Modal>
      </div>
  );
};

export default PostComment;
