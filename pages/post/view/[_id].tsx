import React from 'react';
import ParallaxBG from '../../../components/cards/ParallaxBG';
import axios from 'axios';
import PostPublic from '../../../components/cards/PostPublic';
import Head from 'next/head';

function singlePost(props) {
  const {post} = props.post
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
      <div className="col-md-4 offset-md-4">
          <PostPublic key={post._id} p={post} />
      </div>
    </>
  );
};

export async function getServerSideProps( context ) {
  console.log("context =>", context)
  const { data } = await axios.get(`/post/view/${context.params._id}`);
  // console.log("data =>", data)
  return {
    props: {
      post: data,
    },
  };
}

export default singlePost;
