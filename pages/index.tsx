import React from 'react';


function HomePage() {
  return (
    <div className='col'>
        <div className='row'>
            <h1 className='display-1 text-center py-5'>Home Page</h1>
            <img className='mx-auto d-block d-md-none' src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <img className='mx-auto d-none d-md-block' src='.../public/images/default.jpeg' /> 
        </div>
    </div>
  );
}

export default HomePage;
