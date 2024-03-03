import { useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { toast } from "react-toastify";
import renderHTML from "react-render-html";

const Admin = () => {
  const [state, setState] = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { user, people } = state;

  //pagination
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
    }
  }, [state && state.token]);

  const newsFeed = async () => {
    try {
      const { data } = await axios.get(`/posts`);
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    // console.log(post);
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      const { data } = await axios.delete(`/admin/delete-post/${post._id}`);
      toast.error("Post deleted");
      newsFeed();
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-5 text-light bg-default-image">
          <div className="col text-center">
            <h1 className="display-4">Admin</h1>
            <h2 className="">Hello {state.user && state.user.name}</h2>
          </div>
        </div>
        <div className="row py-4">
            <div className="col-md-8 offset-md-2">
                {posts.map((post) => (
                    <div key={post._id} className="mt-5 d-flex justify-content-between">
                    <div>
                       {renderHTML(post.content)} 
                    </div>
                    <div 
                    onClick={() => handleDelete(post)} 
                    className="text-danger float-right pointer"
                    >
                        <i className="fa fa-trash"></i>
                        delete
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Admin;
