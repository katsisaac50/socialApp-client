import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button } from 'antd';
import Link from 'next/link';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import { UserContext } from '../context';
import { useRouter } from 'next/router';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state] = useContext(UserContext);
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const postData = {
        email,
        selectedQuestion,
        secretAnswer,
        newPassword,
        repeatPassword,
      };
  
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/forgot-password`,
          postData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        toast.success(response.data.message, {
          theme: 'colored',
        });
        setSuccess(response.data.success);
      } catch (error) {
        toast.error(error.response.data.message, {
          theme: 'colored',
        });
        console.error('Error making request:', error);
      } finally {
        setLoading(false);
        // Reset form fields
        resetForm();
      }
    };
  
    const resetForm = () => {
      setEmail('');
      setSelectedQuestion('');
      setSecretAnswer('');
      setNewPassword('');
      setRepeatPassword('');
    };
  
    const handleSuccessClose = () => {
      setSuccess(false);
    };
  
    if(state && state.token) {
      router.push('/');
    };
  
    return (
      <div className="container-fluid p-0">
        <div className="row py-5 bg-default-image text-light">
          <div className="col text-center">
            <h1 className="display-3">Forgot Password</h1>
          </div>
        </div>
        <section
          className="vh-200 bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
          }}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="card mt-5 mb-5"
                    style={{ borderRadius: '15px' }}
                  >
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create new password
                      </h2>
  
                      <ForgotPasswordForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        selectedQuestion={selectedQuestion}
                        setSelectedQuestion={setSelectedQuestion}
                        secretAnswer={secretAnswer}
                        setSecretAnswer={setSecretAnswer}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        repeatPassword={repeatPassword}
                        setRepeatPassword={setRepeatPassword}
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
                  <Button>Go to Login</Button>
                </Link>,
              ]}
            >
              <p>Congrats! You can now login with your new password.</p>
            </Modal>
          </div>
        </div>
      </div>
    );
  };