import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button } from 'antd';
import Link from 'next/link';
import AuthForm from '../../../components/forms/Authform';
import { UserContext } from '../../../context';
import { useRouter } from 'next/router';

const ProfileUpdate = () => {
    const [username, setUsername] = useState("");
    const [about, setAbout] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [secretAnswer, setSecretAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();

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
    setName('');
    setEmail('');
    setSelectedQuestion('');
    setSecretAnswer('');
    setPassword('');
    setRepeatPassword('');
  };

  const handleSuccessClose = () => {
    setSuccess(false);
  };

//   if(state && state.token) {
//     router.push('/');
//   };

  return (
    <div className="container-fluid p-0">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1 className="display-3">Update Profile</h1>
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
                      Update account
                    </h2>

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
                      about={about}
                      setAbout={setAbout}
                      username={username}
                      setUsername={setUsername}
                      page={"profile"}
                    />
                    <div className="row">
                      <div className="col">
                        <p className="text-center text-muted mt-5 mb-0">
                          Have already an account?{' '}
                          <Link href="/login" passHref>
                              <u>Login here</u>
                          </Link>
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
            <p>Account created successfully. Please login.</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;