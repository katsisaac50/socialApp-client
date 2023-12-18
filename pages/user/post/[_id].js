import {useRouter} from 'next/router';
import { useContext, useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { UserContext } from "../../../context";
import PostForm from '../../../components/forms/PostForm';
import UserRoute from "../../../components/routes/UserRoute";
import {toast} from "react-toastify";

const EditPost = ()=> {
  const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState({});
    const [post, setPost] = useState()
    const router = useRouter();
    const _id = router.query._id;
    
    useEffect(
        ()=>{
            if(_id) fetchPost();
        }, [_id]
    );

    const postSubmit = async (e) => {
        e.preventDefault();
        console.log(state)
        try {
            
            const {data} = await axios.put(`/update-post/${_id}`, {content, image});
            console.log(data)
            if(data.error){
                toast.success("Post created");
                router.push("/user/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPost = async () => {
        try {
            const {data} = await axios.get(`/user/post/${_id}`)
              setPost(data);
              setContent(data.content);
              setImage(data.image);
              console.log(data)

        } catch (error){
            console.log(error);
        }
    }

    const handleQuillChange = (value) => {
        // Set the modified content to state
        setContent(value);
      };

      const handleImageUpload = async (e) => {
        e.preventDefault();
        
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('image', file);

        setUploading(true);

        try {

          const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/upload-image`, formData);

          setUploading(false);

          setImage({
            url: response.data.result.secure_url,
            public_id: response.data.result.public_id
          });

          if(response.data.success) {
            toast.success(response.data.message, {
              theme: 'colored',
            });
          } else {
            toast.error(response.data.message, {
              theme: 'colored',
            });
          }

        } catch (err) {

          console.log(err);
          setUploading(false);

        }
        
      }

    return (
        <UserRoute>
        <div className="row py-3"><div className="col-md-8">
            <h1>Edit Post</h1>
            <PostForm 
                content = {content}
                handleQuillChange = {handleQuillChange}
                postSubmit={postSubmit}
                handleImageUpload={handleImageUpload}
                uploading={uploading}
                image={image}
            />   
        </div>
        </div>
        
        {/* <div>{JSON.stringify(posts, null, 4)}</div> */}
        </UserRoute>
    )
}

export default EditPost;