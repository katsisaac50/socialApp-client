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
        <label htmlFor="form3Example3cg" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          id="form3Example3cg"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="form3Example5cg" className="form-label">
          Pick a question
        </label>
        <select
          id="form3Example5cg"
          className="form-select form-select-lg"
          aria-label="Default select example"
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
        >
          <option value="" disabled>
            Pick a question
          </option>
          <option value="What is your favourite color?">What is your favourite color?</option>
          <option value="What is your favourite food?">What is your favourite food?</option>
          <option value="What is your favourite book?What is your favourite book?">What is your favourite book?</option>
        </select>
        <small>
          <label htmlFor="form3Example4cg" className="form-label">
            You can use this to reset your password if forgotten.
          </label>
          <input
            type="text"
            id="form3Example4cg"
            className="mt-2 form-control form-control-lg"
            value={secretAnswer}
            onChange={(e) => setSecretAnswer(e.target.value)}
          />
        </small>
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="form3Example4cdg" className="form-label">
          New Password
        </label>
        <input
          type="password"
          id="form3Example4cdg"
          className="form-control form-control-lg"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="form3Example4cdg" className="form-label">
          Repeat your password
        </label>
        <input
          type="password"
          id="form3Example4cdg"
          className="form-control form-control-lg"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
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
  );
};

export default ForgotPasswordForm;