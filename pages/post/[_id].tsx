import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Avatar } from "antd";
import { Toast } from "react-bootstrap";
import { Modal } from "antd";
import axios from "axios";
import UserContext from "../../context";

const PostComment = ({post, addComment, comment, setComment})=>{
    const [posts, setPosts] = useState(post);
    const router = useRouter();
    const { user } = useContext(UserContext);
    const _id = router.query._id;

    useEffect(()=>{
        if(_id) fetchPost();
    }, [_id]);

    const fetchPost = async () => {
        try {
            const {data} = await axios.get(`/user/post/${_id}`)
              setPosts(data);
              setContent(data.content);
              setImage(data.image);
              console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <div className="post-comment">
                <div className="post-comment-header">
                    <Avatar size={40} icon="user" />
                </div>
            </div>
        </div>
    );
    };

    export default PostComment;