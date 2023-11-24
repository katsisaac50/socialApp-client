
import React, { useState } from 'react';
import axios from "axios";
import {toast} from 'react-toastify';
import Link from 'next/link';
import AuthForm from '../components/forms/Authform';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../context';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const [state, setState] = useContext(UserContext);
  
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const postData = {
        email,
        password,
      };
    
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/login`,
          postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        );
        setState({ ...state, user: response.data.existingUser, token: response.data.token });

        // save user and token in local storage and redirect
        localStorage.setItem('auth', JSON.stringify(response.data));
        console.log(state)
        router.push('/');
        
        // console.log(response.data);
      } catch (error) {
        toast.error(error.response.data.message, {
          theme: 'colored',
        });
        console.error('Error making request:', error);
        setLoading(false);
      }
    };

    if(state && state.token) {
      router.push('/');
    }
  
    return (
      <div className='container-fluid p-0'>
        <div className='row py-5 bg-default-image text-light'>
          <div className='col text-center '>
            <h1 className="display-3">Login Page</h1>
          </div>
        </div>
        <section className="vh-200 bg-image"
              style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
              <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div className="card mt-5 mb-5" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-5">
                          <h2 className="text-uppercase text-center mb-5">Login to account</h2>
        
        <AuthForm 
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        page="login"
        />
        <div className="row">
                      <div className="col">
                      <p className="text-center text-muted mt-5 mb-0">
    Not registered? <Link href="/register" className="fw-bold text-body"><u>Register</u></Link>
  </p>
                      </div>
                    </div>
        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </div>
    );
  };

export default LoginPage;