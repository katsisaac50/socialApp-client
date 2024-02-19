import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';
import ParallaxBG from '../components/cards/ParallaxBG';
import axios from 'axios';
import Post from '../components/cards/Post';
import Head from 'next/head';
function HomePage(props) {
  const {posts} = props.posts
  const [ state, setState ] = useContext(UserContext);
  const head = () => (
    <Head>
      <title>My socialApp - A social network by devs for devs</title>
      <meta 
      name="description" 
      content="A social network by developers for other web developers" 
      />
      <meta 
      name="keywords" 
      content="social, network, web, developers" 
      />
      <meta 
      name="author" 
      content="Katongole Isaac" 
      />
      <meta 
      name="viewport" 
      content="width=device-width, initial-scale=1.0" 
      />
      <meta 
      property='og:type' 
      content='website'
      />
      <meta 
      property='og:title' 
      content='My socialApp'
      />
      <meta 
      property='og:site_name' 
      content='My socialApp' 
      />
      <meta 
      property='og:image:secure_url' 
      content='http://localhost:3000/images/favicon.png' 
      />
      <meta 
      property='og:url' 
      content='http://localhost:3000/' 
      />
      <link rel="stylesheet" href="/globalcss/styles.css" />
      <link rel="icon" href="/images/favicon.png"  />
    </Head>
  )
  return (
    <>
    {head()}
    <ParallaxBG url="/images/default.jpeg"/>
    {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
    {posts.map((post) => (
      <div className="col-md-4">
        <Post key={post._id} p={post} />
      </div>
      
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
