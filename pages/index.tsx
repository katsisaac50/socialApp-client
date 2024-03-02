import React, { useEffect } from 'react';
import ParallaxBG from '../components/cards/ParallaxBG';
import axios from 'axios';
import PostPublic from '../components/cards/PostPublic';
import Head from 'next/head';
import Link from 'next/link';
import io from'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  reconnection: true,
});

function HomePage(props) {
  const {posts} = props.posts
  const [newsFeed, setNewsFeed] = React.useState([]);
//   useEffect(() => {
// // console.log("socket io", socket);
//     socket.on('recieve-message', (message) => {
//       console.log(message)
//     })
//   }, [])

  useEffect(() => {
    socket.on('recieve-message', (message) => {
      setNewsFeed([message, ...posts])
    })
  }, [])

  const collection = newsFeed.length > 0 ? newsFeed : posts

console.log("collection =>", collection)
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
      content='http://localhost:3000' 
      />
      <link rel="stylesheet" href="/globalcss/styles.css" />
      <link rel="icon" href="/images/favicon.png"  />
    </Head>
  )
  return (
    <>
    {head()}
    <ParallaxBG url="/images/default.jpeg"/>
    <div className="container">
      {/* <button 
      onClick = {() => socket.emit('send-message', 'test message')} 
      className="btn btn-primary btn-block mt-2">
        send message
      </button> */}
      <div className="row pt-5">
        {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
    {collection && collection.map((post) => (
     
     <div key={post._id} className="col-md-4">
     <div>
      {console.log("post =>", post)}
       <Link href={`/post/view/${post._id}`} key={post._id}>
         <PostPublic key={post._id} p={post} />
       </Link>
     </div>
   </div>
      
    ))}
      </div>
    </div>
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
