import { Avatar } from "antd";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { renderToHTML } from "react-render-html";
import moment from "moment";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

const PostForm = ({
                        content, 
                        handleQuillChange, 
                        postSubmit, 
                        handleImageUpload,
                        uploading,
                        image
                        }) => {
    // const [state] = useContext(UserContext);
    // const [content, setContent] = useState("");
    // const [title, setTitle] = useState("");

    return (
        <div className="card">
            <div className="card-body pb-3">
                <form action="" className="form-group">
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={handleQuillChange}
                        className="form-control"
                        placeholder="Write something..."
                    />
                </form>
            </div>

            

            <div className="card-footer d-flex justify-content-between text-muted">
                <button
                    disabled={!content}
                    className="btn btn-primary"
                    onClick={postSubmit}
                >
                    Post
                </button>
                <label className="form-label">
                    {image&&image.url ? (
                    <Avatar size={30} src={image.url} />
                    ) : uploading ? (
                        <LoadingOutlined className="text-primary me-2 mb-1" style={{display: uploading ? "inline-block" : "none"}}/> 
                        ): (
                        <Avatar size={30} icon={<CameraOutlined />} />
                        )}
                    {/* <LoadingOutlined className="text-primary me-2 mb-1" style={{display: uploading ? "inline-block" : "none"}}/> */}
                    {/* <CameraOutlined className="text-primary me-2 mb-1"/> */}
                    <input  onChange={handleImageUpload} type="file" accept="image/*" hidden/>
                </label>
            </div>
        </div>
    )
};

export default PostForm;