import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';
import ParallaxBG from '../components/cards/ParallaxBG';
import axios from 'axios';
function HomePage(props) {

  const [ state, setState ] = useContext(UserContext);
  return (
    <>
    <ParallaxBG url="/images/default.jpeg"/>
    <pre>{JSON.stringify(props, null, 4)}</pre>
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
