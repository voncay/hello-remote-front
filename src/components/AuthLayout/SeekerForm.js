import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../logic/UserFunctions'

const SeekerForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [userType, setUserType] = useState('')

  let navigate = useNavigate()

  const createUser = e => {
    e.preventDefault()

    const newUser = {
      // creates new object using useStates
      // first_name: firstName,
      // last_name: lastName,       // -> for profile
      email: email,
      password: password,
      user_type: 'recruiter'      // -> if recruiter
    //   company_name: "Jaxnation",
    //   company_description: "Cras in purus eu magna vulputate luctus.",
    //   recruiter_type: "head-hunter"   // -> radio in formulaire enum {head-hunter, in-house, none}
    }

    const registeredUser = register(newUser).then((res) => {
      // calls the register function from UserFunctions.js and passes newUser as argument
      navigate('/login') // then navigates to login
    })

    console.log(registeredUser, "registered user")

    setEmail('')
    setPassword('')
  }

  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Form */}
        <div className="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
          <div className="flex-grow-1 mx-auto" style={{ maxWidth: "28rem" }}>
            {/* Heading */}
            <div className="text-center mb-5 mb-md-7">
              <h1 className="h2">Welcome to Hello Remote</h1>
              <p>Fill out the form to get started.</p>
            </div>
            {/* End Heading */}
            {/* Form */}
            <form
              className=" needs-validation"
              noValidate
              onSubmit={ createUser }
            >
              {/* Form */}
              <div className="mb-3">
                <label 
                  className="form-label" htmlFor="signupSimpleSignupEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupSimpleSignupEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupSimpleSignupPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  id="signupSimpleSignupConfirmPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  // value={confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary btn-lg">
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

export default SeekerForm;
