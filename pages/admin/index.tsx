import { useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import People from "../../components/cards/People";
import CommentForm from "../../components/forms/CommentForm"
import Link from "next/link";
import {Modal, Pagination} from "antd";
import Search from "../../components/search";

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

        if (  data.success) {
          socket.emit("new-post", data.postWithUser);
        }
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
            <h1 className="display-4">News feed</h1>
            <h2 className="">Hello {state.user && state.user.name}</h2>
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
              handleComment={handleComment}
              removeComment={removeComment}
            />
            <Pagination 
            current={currentPage} 
            total={(totalPosts/3)*10} 
            onChange={(value)=>setCurrentPage(value)} 
            />
          </div>
          <div className="col-md-4">
            <Search />
            <h3 className="text-center">People you may know</h3>
            {state && state.user && (
              <Link href={`/user/following`} legacyBehavior>
                <a className="h6">{state.user.following.length} Following</a>
              </Link>
            )}
            <People people={state.people} handleFollow={handlefollow} />
          </div>
        </div>
        <Modal visible={visible} onCancel={() => setVisible(false)} title="Comment" footer={null}>
          <CommentForm addComment={addComment} comment={comment} setComment={setComment}/>
        </Modal>
      </div>
    </UserRoute>
  );
};

export default Admin;
