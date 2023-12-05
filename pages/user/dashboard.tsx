
import {useContext, useState} from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import CreatePostForm from '../../components/forms/CreatePostForm';
import axios from "axios";

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
        } catch (err) {
          console.log(err);
        }
      }

console.log(content);
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
                postSubmit={() => {}}
            />
        </div>
        <div>{content}</div>
        </UserRoute>
    );
};

export default Dashboard;
