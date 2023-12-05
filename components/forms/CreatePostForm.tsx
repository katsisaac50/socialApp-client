import { Avatar } from "antd";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { UserContext } from "../../context";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { CameraOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

const CreatePostForm = ({content, handleQuillChange, postSubmit, handleImageUpload}) => {
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
                    <CameraOutlined className="text-primary me-2 mb-1"/>
                    <input  onChange={handleImageUpload} type="file" accept="image/*" hidden/>
                </label>
            </div>
        </div>
    )
};

export default CreatePostForm;