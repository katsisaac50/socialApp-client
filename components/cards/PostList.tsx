import React from "react";
import { useContext } from "react";
import { renderToHTML } from "react-render-html";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import { Avatar } from "antd";
import {
  HeartOutlined,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";
import { imageSource } from "../../functions/index";
import Link from "next/link";
import Post from "./Post";

const PostList = ({
  posts,
  like,
  handleDelete,
  handleLikes,
  handleComment,
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
            />
          ))}
      </div>
    </div>
  );
};

export default PostList;
