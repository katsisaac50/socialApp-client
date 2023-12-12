
import React from "react";
import { renderToHTML } from "react-render-html";
import ReactHtmlParser from 'react-html-parser';     
import moment from "moment";
import { Avatar } from "antd";
import { HeartOutlined, CommentOutlined} from "@ant-design/icons";

const PostList = ({posts}) => {

    return (
        <div className="card">
            {/* <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
            </div> */}
        <div>
            {posts && posts.map((p) => (
                <div key={p._id} className="card-body">
                    <div className="card-header">
                        <div>
                            <Avatar src={p.image&&p.image.url} size={"large"}  alt={p.user.name}>
                                {p.user.name[0]}
                            </Avatar>{" "}
                        </div>
                        <span className="pt-2 ml-3">
                            Posted by {p.user.name}
                        </span>
                        <span>{" "}</span>
                        <span className="pt-2 ml-3">
                            {moment(p.createdAt).fromNow()}
                        </span>
                        {/* {p.image&&p.image.url && <img src={p.image.url} alt="" />} */}
                    </div>
                    <div className="card-body">
                    {ReactHtmlParser(p.content)}
                    </div>
                    <div className="card-footer">
                        {/* <img 
                        className="card-img-top" 
                        src={p.image&&p.image.url} 
                        alt={p.user.name} 
                        /> */}
                        <div style={{
                            backgroundImage: `url(${p.image&&p.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            height: "300px",
                        }}>

                        </div>

                        <div>
                            <span className="text-primary p-2"><HeartOutlined />{ " "} {p.likes && p.likes.length} likes</span>
                            <span className="text-primary p-2"><CommentOutlined />{ " "} {p.comments && p.comments.length} comments </span>
                        </div>

                    </div>
                    
                </div>
            ))}
        </div>
        </div>
    )
};

export default PostList;