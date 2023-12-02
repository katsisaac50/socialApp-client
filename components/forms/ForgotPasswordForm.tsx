import { SyncOutlined } from '@ant-design/icons';
const ForgotPasswordForm = ({
    handleSubmit,
    email,
    setEmail,
    selectedQuestion,
    setSelectedQuestion,
    secretAnswer,
    setSecretAnswer,
    newPassword,
    setNewPassword,
    loading, 
    repeatPassword,
    setRepeatPassword,
}) => {

    return (
        <form onSubmit={handleSubmit}>
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
  </div>

  <div className="form-outline mb-4">
    <input
      type="password"
      id="form3Example4cdg"
      className="form-control form-control-lg"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />
    <label className="form-label" htmlFor="form3Example4cdg">
      New Password
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

  <div className="d-flex justify-content-center">
    <button
      type="submit"
      disabled={!(email && selectedQuestion && secretAnswer && newPassword && repeatPassword)}
      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
    >
      {loading ? <SyncOutlined spin className='py-1' /> : 'Submit'}
    </button>
  </div>
</form>
    )
};

export default ForgotPasswordForm;