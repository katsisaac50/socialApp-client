import { SyncOutlined } from '@ant-design/icons';
const AuthForm = ({
    name,
    setName,
    handleSubmit,
    email,
    setEmail,
    selectedQuestion,
    setSelectedQuestion,
    secretAnswer,
    setSecretAnswer,
    password,
    setPassword,
    loading, 
    repeatPassword,
    setRepeatPassword,
    consent,
    setConsent,
    page,
}) => {

    return (
        <form onSubmit={handleSubmit}>

  {page!='login' && <div className="form-outline mb-4">
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
  </div>}

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

  { page!='login' && <div className="form-outline mb-4">
    <select
      id="form3Example5cg"
      className="form-select form-select-lg"
      aria-label="Default select example"
      value={selectedQuestion}
      onChange={(e) => setSelectedQuestion(e.target.value)}
    >
      <option value="" disabled>Pick a question</option>
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
      value={secretAnswer}
      onChange={(e) => setSecretAnswer(e.target.value)}
    />
    <small>
      <label className="form-label" htmlFor="form3Example4cg">
        You can use this to reset your password if forgotten.
      </label>
    </small>
  </div>}

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

  { page!='login' && <><div className="form-outline mb-4">
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

  <div className="form-check d-flex justify-content-center mb-5">
    <input
      className="form-check-input me-2"
      type="checkbox"
      value=""
      onChange={() => setConsent(!consent)}
      id="form2Example3cg"
    />
    <label className="form-check-label" htmlFor="form2Example3g">
      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
    </label>
  </div>
      </>
  }

  <div className="d-flex justify-content-center">
    <button
      type="submit"
      disabled={ page==='login'? !(email && password):!(name && email && selectedQuestion && secretAnswer && password && repeatPassword && consent)}
      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
    >
      {loading ? <SyncOutlined spin className='py-1' /> : page==='login'? 'Login':'Register'}
    </button>
  </div>
</form>
    )
};

export default AuthForm