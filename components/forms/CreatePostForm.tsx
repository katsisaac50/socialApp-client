import { Avatar } from "antd";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { UserContext } from "../../context";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

const CreatePostForm = ({content, setContent, postSubmit}) => {
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
                        onChange={setContent}
                        className="form-control"
                        placeholder="Write something..."
                    />
                </form>
            </div>

            <div className="card-footer">
                <button
                    disabled={!content}
                    className="btn btn-primary"
                    onClick={postSubmit}
                >
                    Post
                </button>
            </div>
        </div>
    )
};

export default CreatePostForm;