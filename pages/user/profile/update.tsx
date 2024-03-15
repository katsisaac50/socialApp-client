import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button, Avatar } from 'antd';
import Link from 'next/link';
import AuthForm from '../../../components/forms/AuthForm';
import { UserContext } from '../../../context';
import { useRouter } from 'next/router';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';

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
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(()=>{
  // console.log(state.user)
    if(state && state.user){
      console.log("user from the state=>", state.user)
      setAbout(state.user.about);
      setUsername(state.user.userName);
      setEmail(state.user.email);
      setName(state.user.name);
    }
    
  }, [state && state.user])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      name,
      email,
      selectedQuestion,
      secretAnswer,
      password,
      repeatPassword,
      about,
      username,
      image,
    };

    try {
      setLoading(true);
      const {data} = await axios.put(
        `/profile-update`,
        postData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // update local storage, update user, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));

      setState({...state, user: data})
      
      toast.success(data.message, {
        theme: 'colored',
      });
      setSuccess(data.success);

      setLoading(false);

    } catch (error) {
      console.log('greatness', error)
      toast.error(error.data.errors[0].message, {
        theme: 'colored',
      });
      console.error('Error making request:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleSuccessClose = () => {
    setSuccess(false);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);

    try {
      const response = await axios.post(`/upload-image`, formData);

      setUploading(false);

      setImage({
        url: response.data.result.secure_url,
        public_id: response.data.result.public_id
      });

      if(response.data.success) {
        toast.success(response.data.message, {
          theme: 'colored',
        });
      } else {
        toast.error(response.data.message, {
          theme: 'colored',
        });
      }

    } catch (err) {

      console.log(err);
      setUploading(false);

    }
    
  }

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
                    <label className="form-label d-flex justify-content-center h5">
                    {image&&image.url ? (
                    <Avatar size={30} src={image.url} />
                    ) : uploading ? (
                        <LoadingOutlined className="text-primary me-2 mb-1" style={{display: uploading ? "inline-block" : "none"}}/> 
                        ): (
                        <Avatar size={30} icon={<CameraOutlined />} />
                        )}
                    <input  onChange={handleImageUpload} type="file" accept="image/*" hidden/>
                </label>
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
            footer={null}
          >
            <p>You have successfully updated your profile.</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;