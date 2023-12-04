
import {useContext, useState} from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import CreatePostForm from '../../components/forms/CreatePostForm';


const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const router = useRouter();
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
                setContent = {setContent}
                postSubmit={() => {}}
            />
        </div>
        </UserRoute>
    );
};

export default Dashboard;
