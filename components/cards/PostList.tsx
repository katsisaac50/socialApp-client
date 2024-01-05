
import React from "react";
import { useContext } from "react";
import { renderToHTML } from "react-render-html";
import ReactHtmlParser from 'react-html-parser';     
import moment from "moment";
import { Avatar } from "antd";
import { HeartOutlined, CommentOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";


const PostList = ({posts, like, handleDelete, handleLikes}) => {

    const [state] = useContext(UserContext);
    const router = useRouter();

    return (
        <div className="card">
        <div>
            {posts && posts.map((p) => (
                <div key={p._id} className="card-body">
                    <div className="card-header">
                        <div>
                            <Avatar src={p.image&&p.image.url} size={"large"}  alt={p.user && p.user.name}>
                                {p.user && p.user.name[0]}
                            </Avatar>{" "}
                        </div>
                        <span className="pt-2 ml-3">
                            Posted by {p.user && p.user.name}
                        </span>
                        <span>{" "}</span>
                        <span className="pt-2 ml-3">
                            {moment(p.createdAt).fromNow()}
                        </span>
                    </div>
                    <div className="card-body">
                    {ReactHtmlParser(p.content)}
                    </div>
                    <div className="card-footer">
                        <div style={{
                            backgroundImage: `url(${p.image&&p.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            height: "300px",
                        }}>

                        </div>

                        
                        <div className="d-flex pt-2">
                            
                        <span className="text-primary pt-2 h5 px-2"><HeartOutlined onClick={(e)=>handleLikes(p)} className={like === true ? 'bg-danger' : ''}/>{console.log(p)}{ " "} {p.likes && p.likes} likes</span>
                        <span className="text-primary pt-2 h5 px-2"><CommentOutlined />{ " "} {p.comments && p.comments.length} comments </span>
                          {state && state.user && state.user._id === p.user && p.user._id && (
                            <>
                            <EditOutlined onClick={()=>router.push(`/user/post/${p._id}`)} className="text-danger pt-2 h5 px-2 mx-auto"/>
                            <DeleteOutlined onClick={() => handleDelete(p)} className="text-danger pt-2 h5 px-2"/> 
                            </>
                         )}
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
    )
};

export default PostList;