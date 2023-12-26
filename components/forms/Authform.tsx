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
  about,
  setAbout,
  username,
  setUsername
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {page == 'profile' && (
      <>
      <div className="form-outline mb-4">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control form-control-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            placeholder='Username'
          />
        </div>
        <div className="form-outline mb-4">
        <label htmlFor="name" className="form-label">
          About
        </label>
        <input
          type="text"
          id="about"
          className="form-control form-control-lg"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          autoComplete="about"
          placeholder='Write about yourself'
        />
      </div>
      </>
      )}
      {page !== 'login' && (
        <div className="form-outline mb-4">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control form-control-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>
      )}

      <div className="form-outline mb-4">
        <label htmlFor="email" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          disabled ={page === "profile"}
        />
      </div>

      {page !== 'login' && (
        <div className="form-outline mb-4">
          <label htmlFor="selectedQuestion" className="form-label">
            Pick a question
          </label>
          <select
            id="selectedQuestion"
            className="form-select form-select-lg"
            aria-label="Default select example"
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
            autoComplete="question"
          >
            <option value="" disabled>
              Pick a question
            </option>
            <option value="What is your favourite color?">What is your favourite color?</option>
            <option value="What is your favourite food?">What is your favourite food?</option>
            <option value="What is your favourite book?">What is your favourite book?</option>
          </select>
          <small>
            <label htmlFor="secretAnswer" className="form-label">
              You can use this to reset your password if forgotten.
            </label>
          </small>
          <input
            type="text"
            id="secretAnswer"
            className="mt-2 form-control form-control-lg"
            value={secretAnswer}
            onChange={(e) => setSecretAnswer(e.target.value)}
            autoComplete="off"
          />
        </div>
      )}

      <div className="form-outline mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control form-control-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>

      {page !== 'login' && (
        <>
          <div className="form-outline mb-4">
            <label htmlFor="repeatPassword" className="form-label">
              Repeat your password
            </label>
            <input
              type="password"
              id="repeatPassword"
              className="form-control form-control-lg"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              onChange={() => setConsent(!consent)}
              id="consent"
            />
            <label htmlFor="consent" className="form-check-label">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>
        </>
      )}

      <div className="d-flex justify-content-center">
        <button
          type="submit"
          disabled={
            page === 'login'
              ? !(email && password)
              : !(name && email && selectedQuestion && secretAnswer && password && repeatPassword && consent)
          }
          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : page === 'login' ? 'Login' : 'Register'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
