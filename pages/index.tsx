import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';
import ParallaxBG from '../components/cards/ParallaxBG';
import axios from 'axios';
import Post from '../components/cards/Post';
function HomePage(props) {
  const {posts} = props.posts
  const [ state, setState ] = useContext(UserContext);
  return (
    <>
    <ParallaxBG url="/images/default.jpeg"/>
    {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
    {posts.map((post) => (
      <Post key={post._id} p={post} />
    ))}
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  // console.log("data =>", data)
  return {
    props: {
      posts: data,
    },
  };
}

export default HomePage;
