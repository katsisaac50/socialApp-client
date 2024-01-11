import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import People from "../../components/cards/People";
import Link from "next/link";

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState({});
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const router = useRouter();
  const { user, people } = state;

  useEffect(() => {
    if (state && state.token) {
      newsFeed();
      findPeople();
    }
  }, [state && state.token]);

  const findPeople = async () => {
    console.log("find people")
    try {
      const { data } = await axios.get(
        `/find-people`,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
        console.log("data.people =>", data)

      setState({...state, people: data.people });
      
    } catch (err) {
      console.log(err);
    }
  };

  const newsFeed = async () => {
    try {
      // const { data } = await axios.get(
      //   `/user-posts`
      // );
      const { data } = await axios.get('/news-feed');
      // console.log(state)
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuillChange = (value) => {
    // Remove <p> tags from the HTML content
    const contentWithoutPTags = value.replace(/<\/?p>/gi, "");

    // Set the modified content to state
    setContent(value);
  };

  const postSubmit = async () => {
    try {
      const {data} = await axios.post(
        `/create-post`,
        { content, image },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      if (  data.success) {
        newsFeed();
        setContent("");
        setImage({});
        toast.success(  data.message, {
          theme: "colored",
        });
      } else {
        toast.error(  data.message, {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (post) => {
    console.log(post);
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      const { data } = await axios.delete(`/delete-post/${post._id}`);
      toast.error("Post deleted");
      newsFeed();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikes = async (post) => {
    try {
      if (!like) {
        setLike(true);
        console.log("ger");
        const { data } = await axios.post(`/like-post/${post._id}`);
        console.log("ge", data);
        newsFeed();
      } else {
        setLike(false);
        const { data } = await axios.post(`/dislike-post/${post._id}`);
        newsFeed();
      }
      // const {data} = await axios.post(`/like-post/${post._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    try {
      const {data} = await axios.post(
        `/upload-image`,
        formData
      );

      setUploading(false);

      setImage({
        url:   data.result.secure_url,
        public_id:   data.result.public_id,
      });

      if (  data.success) {
        toast.success(  data.message, {
          theme: "colored",
        });
      } else {
        toast.error(  data.message, {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  if (state === null) {
    router.push("/login");
    return null;
  }

  // console.log(posts)
  
  const handlefollow = async (user) => {
    try {
      const { data } = await axios.put(
        `/follow-user`,
        {_id: user._id},
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data.user;
      localStorage.setItem("auth", JSON.stringify(auth));

      setState({...state, user: data.user });

      //update people state
      let filtered = people.filter((person) => person._id!== user._id);

      setState({...state, people: filtered });
      // rerender the posts in newsfeed
      newsFeed();

      toast.success(data.message, {
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserRoute>
      <div className="container-fluid">
          <div className="row py-5 text-light bg-default-image">
            <div className="col text-center">
              <h1 className="display-4">News feed</h1>
              <h2 className="">Hello {user && user.name}</h2>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-8">
              <PostForm
                content={content}
                handleQuillChange={handleQuillChange}
                postSubmit={postSubmit}
                handleImageUpload={handleImageUpload}
                uploading={uploading}
                image={image}
              />
              <br />
              <PostList
                posts={posts}
                like={like}
                handleDelete={handleDelete}
                handleLikes={handleLikes}
              />
            </div>
          {/* <div>{JSON.stringify(posts, null, 4)}</div> */}
          <div className="col-md-4">
           {/* {<pre>{JSON.stringify(people, null, 4)}</pre>} */}
           {state && state.user && (
            <Link href ={`/user/following`} legacyBehavior>
              <a className="h6">{state.user.following.length} Following</a>
            </Link>
            )}
           <People people={people} handlefollow={handlefollow} />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Dashboard;
