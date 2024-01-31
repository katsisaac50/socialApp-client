import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';

function HomePage() {

  const [ state, setState ] = useContext(UserContext);
  return (
    <div className='col'>
        <div className='row'>
            <h1 className='display-1 text-center py-5 '>Home Page</h1>
            <img className='mx-auto d-none d-md-block w-50 py-5' src='/images/default.jpeg' alt='image'/> 
            <img className='mx-auto d-none d-md-block w-50 py-5' src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <img className='mx-auto d-none d-md-block w-50 py-5' src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />         
        </div>
    </div>
  );
}

export default HomePage;
