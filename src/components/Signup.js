import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Form */}
        <div className="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
          <div className="flex-grow-1 mx-auto" style={{ maxWidth: "28rem" }}>
            {/* Heading */}
            <div className="text-center mb-5 mb-md-7">
              <h1 className="h2">Welcome to Front</h1>
              <p>Fill out the form to get started.</p>
            </div>
            {/* End Heading */}
            {/* Form */}
            <form className="js-validate needs-validation" noValidate="">
              {/* Form */}
              <div className="mb-3">
                <label className="form-label" htmlFor="signupSimpleSignupEmail">
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupSimpleSignupEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required=""
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupPassword"
                >
                  Password
                </label>
                <div
                  className="input-group input-group-merge"
                >
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="signupSimpleSignupPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                  />
                  <button
                    className="input-group-append input-group-text"
                    onClick={() => console.log('execute signup')}
                  >
                    <i className="bi-eye" />
                  </button>
                </div>
                <span className="invalid-feedback">
                  Your password is invalid. Please try again.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupConfirmPassword"
                >
                  Confirm password
                </label>
                <div
                  className="input-group input-group-merge"
                >
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="confirmPassword"
                    id="signupSimpleSignupConfirmPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"

                  />
                  <button
                    className="input-group-append input-group-text"
                    onClick={() => console.log('execute signup')}
                  >
                    <i className="bi-eye" />
                  </button>
                </div>
                <span className="invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary btn-lg"
                  onClick={() => console.log('execute signup')}
                >
                  Sign up
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account?{" "}
                  <Link className="link" to={'/login'}>
                    Log in here
                  </Link>
                </p>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
        {/* End Form */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  )
}

export default signup;
