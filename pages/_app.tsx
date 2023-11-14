// client/pages/_app.js

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from'../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar bg="black" expand="lg"/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
