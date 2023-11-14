// client/pages/_app.js

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from'../components/Nav';

interface MyAppProps {
  // Define your component props here
  pageProps: any;
  Component: any;
}

function MyApp({ Component, pageProps } : MyAppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
