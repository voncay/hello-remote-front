import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../logic/UserFunctions'

const SignupRecruiter = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [recruiterType, setRecruiterType] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')

  let navigate = useNavigate()

  const createUser = e => {
    e.preventDefault()

    const newUser = {
      // creates new object using useStates
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,       // -> for profile
      user_type: 'recruiter',     
      recruiter_type: recruiterType,   // -> radio
      company_name: companyName,
      company_description: companyDescription
    }

    console.log(newUser, "new recruiter user")

    const registeredUser = register(newUser).then((res) => {
      // calls the register function from UserFunctions.js and passes newUser as argument
      navigate('/login') // then navigates to login
    })

    console.log(registeredUser, "registered recruiter user")

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setRecruiterType('')
    setCompanyName('')
    setCompanyDescription('')
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
              <p>Fill out the <b>Recruiter</b> form to get started.</p>
            </div>
            {/* End Heading */}
            {/* Form */}
            <form
              className=" needs-validation"
              noValidate
              onSubmit={ createUser }
            >
              {/* Form email */}
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
              {/* Form password */}
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
              {/* Form Confirm */}
              {/* <div className="mb-3">
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
              </div> */}
              {/* End Form */}
              {/* Form first name */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupFirstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="firstName"
                  id="signupSimpleSignupFirstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span className="invalid-feedback">
                  Please choose a First Name.
                </span>
              </div>
              {/* End Form */}
              {/* Form last name */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupLastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="lastname"
                  id="signupSimpleSignupLastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <span className="invalid-feedback">
                  Please choose a Last Name.
                </span>
              </div>
              {/* End Form */}
              {/* Form company name */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupCompanyName"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="companyname"
                  id="signupSimpleSignupCompanyName"
                  placeholder="Company Name"
                  aria-label="Company Name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <span className="invalid-feedback">
                  Please add Company Name.
                </span>
              </div>
              {/* End Form */}
              {/* Form company description */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupSimpleSignupCompanyDescription"
                >
                  Company Description
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="companydescription"
                  id="signupSimpleSignupCompanyDescription"
                  placeholder="Company Description"
                  aria-label="Company Description"
                  required
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
                <span className="invalid-feedback">
                  Please add Company Description.
                </span>
              </div>
              {/* End Form */}
              {/* Form recruiter type */}
              <div className="mb-3">
                <p className="form-label">
                  What type of recruiter are you ?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recruiter-type"
                    value="in-house"
                    id="in-house"
                    defaultChecked={recruiterType === 'in-house'}
                    onChange={(e) => setRecruiterType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="in-house">
                    In House
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recruiter-type"
                    value="head-hunter"
                    id="head-hunter"
                    checked={recruiterType === 'head-hunter'}
                    onChange={(e) => setRecruiterType(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="head-hunter">
                    Head Hunter
                  </label>
                </div>
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

export default SignupRecruiter;
