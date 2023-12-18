
import {useContext, useState, useEffect} from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from '../../components/forms/PostForm';
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";

const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState({});
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if(state && state.token) fetchPosts();
    }, [state && state.token]);

    const fetchPosts = async () => {
        try {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/user-posts`);
          
          setPosts(data.posts);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
    }

    const handleQuillChange = (value) => {
        // Remove <p> tags from the HTML content
        const contentWithoutPTags = value.replace(/<\/?p>/gi, '');
    
        // Set the modified content to state
        setContent(value);
      };

      const postSubmit = async () => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/create-post`, {content, image}, {
            headers: {
              Authorization: `Bearer ${state.token}`
            }
          });

          if(response.data.success) {
            fetchPosts();
            setContent("");
            setImage({});
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

    if (state === null) {
        router.push('/login');
        return null;
      }

      console.log(state)
    const { user} = state;
    
    return (
        <UserRoute>
        <div className="row py-3"><div className="col-md-8">
            <h1>Dashboard</h1>
            <h2>Hello {user && user.name}</h2>
            <PostForm 
                content = {content}
                handleQuillChange = {handleQuillChange}
                postSubmit={postSubmit}
                handleImageUpload={handleImageUpload}
                uploading={uploading}
                image={image}
            />
            <br />
        <PostList posts={posts} />    
        </div>
        </div>
        
        {/* <div>{JSON.stringify(posts, null, 4)}</div> */}
        </UserRoute>
    );
};

export default Dashboard;
