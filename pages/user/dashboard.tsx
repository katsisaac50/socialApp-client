
import {useContext, useState} from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import CreatePostForm from '../../components/forms/CreatePostForm';
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleQuillChange = (value) => {
        // Remove <p> tags from the HTML content
        const contentWithoutPTags = value.replace(/<\/?p>/gi, '');
    
        // Set the modified content to state
        setContent(contentWithoutPTags);
      };

      const postSubmit = async () => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/create-post`, {content});
          console.log(response);
          if(response.data.success) {
            setContent("");
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
        }
      }

      const handleImageUpload = async (e) => {
        e.preventDefault();

        console.log("helloe")
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/upload-image`, formData);
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
        }
        
      }

    if (state === null) {
        router.push('/login');
        return null;
      }
    const { existingUser} = state;
    
    return (
        <UserRoute> 
        <div>
            <h1>Dashboard</h1>
            <h2>Hello {existingUser && existingUser.name}</h2>
            <CreatePostForm 
                content = {content}
                handleQuillChange = {handleQuillChange}
                postSubmit={postSubmit}
                handleImageUpload={handleImageUpload}
            />
        </div>
        <div>{content}</div>
        </UserRoute>
    );
};

export default Dashboard;
