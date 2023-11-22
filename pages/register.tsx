import React, { useState } from 'react';
import axios from "axios";
import {toast} from 'react-toastify';
import { Modal, Button } from 'antd';
import Link from 'next/link';
import AuthForm from '../components/forms/Authform';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [secretAnswer, setSecretAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      name,
      email,
      selectedQuestion,
      secretAnswer,
      password,
      repeatPassword,
    };
  
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        postData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      }
      );
      setName('');
      setEmail('');
      setSelectedQuestion('');
      setSecretAnswer('');
      setPassword('');
      setRepeatPassword('');
      setLoading(false);
      toast.success(response.data.message, {
        theme: 'colored',
      })
      setSuccess(response.data.success);
      // console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: 'colored',
      });
      console.error('Error making request:', error);
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccess(false);
  };

  return (
    <div className='container-fluid p-0'>
      <div className='row py-5 bg-default-image text-light'>
        <div className='col text-center '>
          <h1 className="display-3">Register Page</h1>
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
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
      
      <AuthForm 
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      selectedQuestion={selectedQuestion}
      setSelectedQuestion={setSelectedQuestion}
      secretAnswer={secretAnswer}
      setSecretAnswer={setSecretAnswer}
      password={password}
      setPassword={setPassword}
      repeatPassword={repeatPassword}
      setRepeatPassword={setRepeatPassword}
      consent={consent}
      setConsent={setConsent}
      loading={loading}
      />
      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="col">
            <Modal
      title="Success"
      visible={success}
      onCancel={handleSuccessClose}
      footer={[
        <Link href="/login" key="login">
          <Button>
            Go to Login
          </Button>
        </Link>
      ]}
    >
      <p>Account created successfully. Please login.</p>
    </Modal>
            </div>
          </div>
    </div>
  );
};

export default Register;
