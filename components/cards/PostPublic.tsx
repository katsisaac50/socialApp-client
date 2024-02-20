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

const PostPublic = ({
  commentsCount = 4,
  p
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>  
    {p&&(<div className="card">
      <div>
            <div key={p._id} className="card-body">
              <div className="card-header">
                <div>
                  <Avatar
                    src={imageSource(p)}
                    size={"large"}
                    alt={p.user && p.user.name}
                  >
                  </Avatar>{" "}
                </div>
                <span className="pt-2 ml-3">
                  Posted by {p.user && p.user.name}
                </span>
                <span> </span>
                <span className="pt-2 ml-3">
                  {moment(p.createdAt).fromNow()}
                </span>
              </div>
              <div className="card-body">{ReactHtmlParser(p.content)}</div>
              <div className="card-footer">
                <div
                  style={{
                    backgroundImage: `url(${p.image && p.image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "300px",
                  }}
                ></div>

                <div className="d-flex pt-2">
                  {state && state.user && p.likes.includes(state.user._id) ? (
                    <span className="text-primary pt-2 h5 px-2">
                      <HeartFilled />
                      {/*console.log(p)*/} {p.likes.length} likes
                    </span>
                  ) : (
                    <>
                      <span className="text-primary pt-2 h5 px-2">
                        <HeartOutlined />
                        {/*console.log(p)*/} {p.likes.length} likes
                      </span>
                    </>
                  )}
                    <CommentOutlined className="text-primary pt-2 h5 px-2"/>{" "}
                    <div className="pt-2 pl-3">
                        <Link  href={`/post/${p._id}`} passHref legacyBehavior>
                            <a className="text-decoration-none">{p.comments && p.comments.length} comments{" "}</a>
                        </Link>
                    </div>
                </div>
              </div>
              {p.comments && p.comments.length > 0 && (
                <ol className="list-group"
                style={{maxHeight: "125px", overflowY: "scroll"}}
                >
                  {p.comments.slice(0, commentsCount).map((c) => {
                    return (
                      <li key={c._id} className="list-group-item d-flex list-group-item-action justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="ms-2 me-auto">
                            <Avatar
                              src={imageSource(p)}
                              size={20}
                              className="mb-1 mr-3"
                              alt={p.user && p.user.name}
                            />
                          </div>
                          {p.user && p.user.name}
                          <div className="ms-2 me-auto">
                            {c.text}
                          </div>
                        </div>
                        <span className="badge badge-primary rounded-pill text-muted">
                          {moment(c.created).fromNow()}
                          {/* {console.log("Palestine", c, "number two", state)} */}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
      </div>
    </div>
    )}
 </> );
};

export default PostPublic;
