import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    // Handle the registration logic using the state values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Selected Question:', selectedQuestion);
    console.log('Custom Question:', customQuestion);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
  };

  return (
    <div>
      <div className='row bg-info text-light'>
        <div className='col'>
          <h1 className='display-1 text-center py-2'>Register Page</h1>
        </div>
      </div>
      <section className=" vh-200 bg-image"
            style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card mt-5 mb-5" style={{ borderRadius: "15px" }}>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
      <form>
        {/* ... existing form fields ... */}
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example1cg"
            className="form-control form-control-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label" htmlFor="form3Example1cg">
            Your Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3cg"
            className="form-control form-control-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form3Example3cg">
            Your Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <select
            id="form3Example5cg"
            className="form-select form-select-lg"
            aria-label="Default select example"
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
          >
            <option  disabled>Open this select menu</option>
                              <option value="1">What is your favourite color?</option>
                              <option value="2">What is your favourite food?</option>
                              <option value="3">What is your favourite book?</option>
          </select>
          <small>
            <label className="form-label" htmlFor="form3Example4cg">
              Pick a question
            </label>
          </small>
          <input
            type="text"
            id="form3Example4cg"
            className="mt-2 form-control form-control-lg"
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form3Example4cdg"
            className="form-control form-control-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form3Example4cdg">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form3Example4cdg"
            className="form-control form-control-lg"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form3Example4cdg">
            Repeat your password
          </label>
        </div>

        {/* ... existing form fields ... */}

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>

        {/* ... existing form fields ... */}
      </form>
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

export default Register;
