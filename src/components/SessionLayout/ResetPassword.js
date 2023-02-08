import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Form */}
        <div className="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
          <div className="flex-grow-1 mx-auto" style={{ maxWidth: "28rem" }}>
            {/* Heading */}
            <div className="text-center mb-5 mb-md-7">
              <h1 className="h2">Forgot password?</h1>
              <p>
                Enter your email address below and we'll get you back on track.
              </p>
            </div>
            {/* End Heading */}
            {/* Form */}
            <form className="js-validate needs-validation" noValidate="">
              {/* Form */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupSimpleResetPasswordEmail"
                    tabIndex={0}
                  >
                    Your email
                  </label>
                  <Link
                    className="form-label-link"
                    to={'/login'}
                  >
                    <i className="bi-chevron-left small ms-1" /> Back to Log in
                  </Link>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupSimpleResetPasswordEmail"
                  tabIndex={1}
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  required=""
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit
                </button>
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

export default ResetPassword
